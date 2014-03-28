/* $Id: forward0sweep.hpp 3129 2014-02-28 19:58:28Z bradbell $ */
# ifndef CPPAD_FORWARD0SWEEP_INCLUDED
# define CPPAD_FORWARD0SWEEP_INCLUDED

/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-14 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    Eclipse Public License Version 1.0.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */

namespace CppAD { // BEGIN_CPPAD_NAMESPACE
/*!
\defgroup forward0sweep_hpp forward0sweep.hpp
\{
\file forward0sweep.hpp
Compute zero order forward mode Taylor coefficients.
*/

/*
\def CPPAD_ATOMIC_CALL
This avoids warnings when NDEBUG is defined and user_ok is not used.
If \c NDEBUG is defined, this resolves to
\code
	user_atom->forward
\endcode
otherwise, it respolves to
\code
	user_ok = user_atom->forward
\endcode
This maco is undefined at the end of this file to facillitate is 
use with a different definition in other files.
*/
# ifdef NDEBUG
# define CPPAD_ATOMIC_CALL user_atom->forward
# else
# define CPPAD_ATOMIC_CALL user_ok = user_atom->forward
# endif

/*!
\def CPPAD_FORWARD0SWEEP_TRACE
This value is either zero or one. 
Zero is the normal operational value.
If it is one, a trace of every forward0sweep computation is printed.
(Note that forward0sweep is not used if CPPAD_USE_FORWARD0SWEEP is zero).
*/
# define CPPAD_FORWARD0SWEEP_TRACE 0

/*!
Compute zero order forward mode Taylor coefficients.

\tparam Base
The type used during the forward mode computations; i.e., the corresponding
recording of operations used the type \c AD<Base>.

\param s_out
Is the stream where output corresponding to \c PriOp operations will
be written.

\param print
If \a print is false,
suppress the output that is otherwise generated by the c PriOp instructions.

\param n
is the number of independent variables on the tape.

\param numvar
is the total number of variables on the tape.
This is also equal to the number of rows in the matrix \a Taylor; i.e.,
\a play->num_rec_var().

\param play
The information stored in \a play
is a recording of the operations corresponding to the function
\f[
	F : {\bf R}^n \rightarrow {\bf R}^m
\f]
where \f$ n \f$ is the number of independent variables and
\f$ m \f$ is the number of dependent variables.
\n
\n
The object \a play is effectly constant.
There are two exceptions to this.
The first exception is that while palying back the tape
the object \a play holds information about the current location
with in the tape and this changes during palyback. 
The second exception is the fact that the 
zero order ( \a d = 0 ) versions of the VecAD operators LdpOp and LdvOp 
modify the corresponding \a op_arg values returned by 
\ref player::next_forward and \ref player::next_reverse; see the
\link load_op.hpp LdpOp and LdvOp \endlink operations.

\param J
Is the number of columns in the coefficient matrix \a Taylor.
This must be greater than or equal one.

\param Taylor
\b Input: For j = 1 , ... , \a n,
\a Taylor [ j * J + 0 ]
variable with index i on the tape 
(independent variable with index (j-1) in the independent variable vector).
\n
\n
\b Output: For i = \a n + 1, ... , \a numvar - 1,
\a Taylor [ i * J + 0 ]
is the zero order Taylor coefficient for the variable with 
index i on the tape.

\param cskip_op
Is a vector with size play->num_rec_op(),
the input value of the elements does not matter.
Upon return, if cskip_op[i] is true, the operator index i in the recording
does not affect any of the dependent variable (given the value
of the independent variables).

\a return
The return value is equal to the number of ComOp operations
that have a different result from when the information in 
\a play was recorded.
(Note that if NDEBUG is true, there are no ComOp operations
in play and hence this return value is always zero.)
*/

template <class Base>
size_t forward0sweep(
	std::ostream&         s_out,
	bool                  print,
	size_t                n,
	size_t                numvar,
	player<Base>*         play,
	size_t                J,
	Base*                 Taylor,
	bool*                 cskip_op
)
{	CPPAD_ASSERT_UNKNOWN( J >= 1 );

	// op code for current instruction
	OpCode           op;

	// index for current instruction
	size_t         i_op;

	// next variables 
	size_t        i_var;

	// constant and non-constant version of the operation argument indices
	addr_t*         non_const_arg;
	const addr_t*   arg = CPPAD_NULL;

	// initialize the comparision operator (ComOp) counter
	size_t compareCount = 0;

	// This is an order zero calculation, initialize vector indices
	pod_vector<size_t> VectorInd;  // address for each element
	pod_vector<bool>   VectorVar;  // is element a variable
	size_t  i = play->num_rec_vecad_ind();
	if( i > 0 )
	{	VectorInd.extend(i);
		VectorVar.extend(i);
		while(i--)
		{	VectorInd[i] = play->GetVecInd(i);
			VectorVar[i] = false;
		}
	}

	// zero order, so initialize conditional skip flags
	for(i = 0; i < play->num_rec_op(); i++)
		cskip_op[i] = false;

	// work space used by UserOp.
	const size_t user_q = 0;     // lowest order
	const size_t user_p = 0;     // highest order
	vector<bool> user_vx;        // empty vecotor
	vector<bool> user_vy;        // empty vecotor
	vector<Base> user_tx;        // argument vector Taylor coefficients 
	vector<Base> user_ty;        // result vector Taylor coefficients 
	size_t user_index = 0;       // indentifier for this atomic operation
	size_t user_id    = 0;       // user identifier for this call to operator
	size_t user_i     = 0;       // index in result vector
	size_t user_j     = 0;       // index in argument vector
	size_t user_m     = 0;       // size of result vector
	size_t user_n     = 0;       // size of arugment vector
	//
	atomic_base<Base>* user_atom = CPPAD_NULL; // user's atomic op calculator
# ifndef NDEBUG
	bool               user_ok   = false;      // atomic op return value
# endif
	//
	// next expected operator in a UserOp sequence
	enum { user_start, user_arg, user_ret, user_end } user_state = user_start;

	// check numvar argument
	CPPAD_ASSERT_UNKNOWN( play->num_rec_var() == numvar );

	// length of the parameter vector (used by CppAD assert macros)
	const size_t num_par = play->num_rec_par();

        // length of the text vector (used by CppAD assert macros)
        const size_t num_text = play->num_rec_text();

	// pointer to the beginning of the parameter vector
	const Base* parameter = CPPAD_NULL;
	if( num_par > 0 )
		parameter = play->GetPar();

	// pointer to the beginning of the text vector
	const char* text = CPPAD_NULL;
	if( num_text > 0 )
		text = play->GetTxt(0);

	// skip the BeginOp at the beginning of the recording
	play->start_forward(op, arg, i_op, i_var);
	CPPAD_ASSERT_UNKNOWN( op == BeginOp );
# if CPPAD_FORWARD0SWEEP_TRACE
	std::cout << std::endl;
# endif
	bool more_operators = true;
	while(more_operators)
	{
		// this op
		play->next_forward(op, arg, i_op, i_var);
		CPPAD_ASSERT_UNKNOWN( (i_op > n)  | (op == InvOp) );  
		CPPAD_ASSERT_UNKNOWN( (i_op <= n) | (op != InvOp) );  
		CPPAD_ASSERT_UNKNOWN( i_op < play->num_rec_op() );

		// check if we are skipping this operation
		while( cskip_op[i_op] )
		{	if( op == CSumOp )
			{	// CSumOp has a variable number of arguments
				play->forward_csum(op, arg, i_op, i_var);
			}
			play->next_forward(op, arg, i_op, i_var);
			CPPAD_ASSERT_UNKNOWN( i_op < play->num_rec_op() );
		}

		// action to take depends on the case
		switch( op )
		{
			case AbsOp:
			forward_abs_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case AddvvOp:
			forward_addvv_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case AddpvOp:
			CPPAD_ASSERT_UNKNOWN( size_t(arg[0]) < num_par );
			forward_addpv_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case AcosOp:
			// sqrt(1 - x * x), acos(x)
			CPPAD_ASSERT_UNKNOWN( i_var < numvar  );
			forward_acos_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case AsinOp:
			// sqrt(1 - x * x), asin(x)
			CPPAD_ASSERT_UNKNOWN( i_var < numvar  );
			forward_asin_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case AtanOp:
			// 1 + x * x, atan(x)
			CPPAD_ASSERT_UNKNOWN( i_var < numvar  );
			forward_atan_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case CExpOp:
			// Use the general case with d == 0 
			// (could create an optimzied verison for this case)
			forward_cond_op_0(
				i_var, arg, num_par, parameter, J, Taylor
			);
			break;
			// ---------------------------------------------------
			case ComOp:
			forward_comp_op_0(
			compareCount, arg, num_par, parameter, J, Taylor
			);
			break;
			// ---------------------------------------------------

			case CosOp:
			// sin(x), cos(x)
			CPPAD_ASSERT_UNKNOWN( i_var < numvar  );
			forward_cos_op_0(i_var, arg[0], J, Taylor);
			break;
			// ---------------------------------------------------

			case CoshOp:
			// sinh(x), cosh(x)
			CPPAD_ASSERT_UNKNOWN( i_var < numvar  );
			forward_cosh_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case CSkipOp:
			// CSkipOp has a variable number of arguments and
			// next_forward thinks it one has one argument.
			// we must inform next_forward of this special case.
			play->forward_cskip(op, arg, i_op, i_var);
			forward_cskip_op_0(
				i_var, arg, num_par, parameter, J, Taylor, cskip_op
			);
			break;
			// -------------------------------------------------

			case CSumOp:
			// CSumOp has a variable number of arguments and
			// next_forward thinks it one has one argument.
			// we must inform next_forward of this special case.
			play->forward_csum(op, arg, i_op, i_var);
			forward_csum_op(
				0, 0, i_var, arg, num_par, parameter, J, Taylor
			);
			break;
			// -------------------------------------------------

			case DisOp:
			forward_dis_op_0(i_var, arg, J, Taylor);
			break;
			// -------------------------------------------------

			case DivvvOp:
			forward_divvv_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case DivpvOp:
			CPPAD_ASSERT_UNKNOWN( size_t(arg[0]) < num_par );
			forward_divpv_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case DivvpOp:
			CPPAD_ASSERT_UNKNOWN( size_t(arg[1]) < num_par );
			forward_divvp_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case EndOp:
			CPPAD_ASSERT_NARG_NRES(op, 0, 0);
			more_operators = false;
			break;
			// -------------------------------------------------

			case ExpOp:
			forward_exp_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case InvOp:
			break;
			// -------------------------------------------------

			case LdpOp:
			CPPAD_ASSERT_UNKNOWN( VectorInd.size() != 0 );
			CPPAD_ASSERT_UNKNOWN( VectorVar.size() != 0 );
			non_const_arg = play->forward_non_const_arg();
			forward_load_p_op_0(
				i_var, 
				non_const_arg, 
				num_par, 
				parameter, 
				J, 
				Taylor,
				play->num_rec_vecad_ind(),
				VectorVar.data(),
				VectorInd.data()
			);
			break;
			// -------------------------------------------------

			case LdvOp:
			CPPAD_ASSERT_UNKNOWN( VectorInd.size() != 0 );
			CPPAD_ASSERT_UNKNOWN( VectorVar.size() != 0 );
			non_const_arg = play->forward_non_const_arg();
			forward_load_v_op_0(
				i_var, 
				non_const_arg, 
				num_par, 
				parameter, 
				J, 
				Taylor,
				play->num_rec_vecad_ind(),
				VectorVar.data(),
				VectorInd.data()
			);
			break;
			// -------------------------------------------------

			case LogOp:
			forward_log_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case MulvvOp:
			forward_mulvv_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case MulpvOp:
			CPPAD_ASSERT_UNKNOWN( size_t(arg[0]) < num_par );
			forward_mulpv_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case ParOp:
			forward_par_op_0(
				i_var, arg, num_par, parameter, J, Taylor
			);
			break;
			// -------------------------------------------------

			case PowvpOp:
			CPPAD_ASSERT_UNKNOWN( size_t(arg[1]) < num_par );
			forward_powvp_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case PowpvOp:
			CPPAD_ASSERT_UNKNOWN( size_t(arg[0]) < num_par );
			forward_powpv_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case PowvvOp:
			forward_powvv_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case PriOp:
			if( print ) forward_pri_0(s_out,
				i_var, arg, num_text, text, num_par, parameter, J, Taylor
			);
			break;
			// -------------------------------------------------

			case SignOp:
			// cos(x), sin(x)
			CPPAD_ASSERT_UNKNOWN( i_var < numvar  );
			forward_sign_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case SinOp:
			// cos(x), sin(x)
			CPPAD_ASSERT_UNKNOWN( i_var < numvar  );
			forward_sin_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case SinhOp:
			// cosh(x), sinh(x)
			CPPAD_ASSERT_UNKNOWN( i_var < numvar  );
			forward_sinh_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case SqrtOp:
			forward_sqrt_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case StppOp:
			forward_store_pp_op_0(
				i_var, 
				arg, 
				num_par, 
				J, 
				Taylor,
				play->num_rec_vecad_ind(),
				VectorVar.data(),
				VectorInd.data()
			);
			break;
			// -------------------------------------------------

			case StpvOp:
			forward_store_pv_op_0(
				i_var, 
				arg, 
				num_par, 
				J, 
				Taylor,
				play->num_rec_vecad_ind(),
				VectorVar.data(),
				VectorInd.data()
			);
			break;
			// -------------------------------------------------

			case StvpOp:
			forward_store_vp_op_0(
				i_var, 
				arg, 
				num_par, 
				J, 
				Taylor,
				play->num_rec_vecad_ind(),
				VectorVar.data(),
				VectorInd.data()
			);
			break;
			// -------------------------------------------------

			case StvvOp:
			forward_store_vv_op_0(
				i_var, 
				arg, 
				num_par, 
				J, 
				Taylor,
				play->num_rec_vecad_ind(),
				VectorVar.data(),
				VectorInd.data()
			);
			break;
			// -------------------------------------------------

			case SubvvOp:
			forward_subvv_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case SubpvOp:
			CPPAD_ASSERT_UNKNOWN( size_t(arg[0]) < num_par );
			forward_subpv_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case SubvpOp:
			CPPAD_ASSERT_UNKNOWN( size_t(arg[1]) < num_par );
			forward_subvp_op_0(i_var, arg, parameter, J, Taylor);
			break;
			// -------------------------------------------------

			case TanOp:
			// tan(x)^2, tan(x)
			CPPAD_ASSERT_UNKNOWN( i_var < numvar  );
			forward_tan_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case TanhOp:
			// tanh(x)^2, tanh(x)
			CPPAD_ASSERT_UNKNOWN( i_var < numvar  );
			forward_tanh_op_0(i_var, arg[0], J, Taylor);
			break;
			// -------------------------------------------------

			case UserOp:
			// start or end an atomic operation sequence
			CPPAD_ASSERT_UNKNOWN( NumRes( UserOp ) == 0 );
			CPPAD_ASSERT_UNKNOWN( NumArg( UserOp ) == 4 );
			if( user_state == user_start )
			{	user_index = arg[0];
				user_id    = arg[1];
				user_n     = arg[2];
				user_m     = arg[3];
				user_atom  = atomic_base<Base>::class_object(user_index);
# ifndef NDEBUG
				if( user_atom == CPPAD_NULL )
				{	std::string msg = 
						atomic_base<Base>::class_name(user_index)
						+ ": atomic_base function has been deleted";
					CPPAD_ASSERT_KNOWN(false, msg.c_str() );
				}
# endif
				if(user_tx.size() != user_n)
					user_tx.resize(user_n);
				if(user_ty.size() != user_m)
					user_ty.resize(user_m);
				user_j     = 0;
				user_i     = 0;
				user_state = user_arg;
			}
			else
			{	CPPAD_ASSERT_UNKNOWN( user_state == user_end );
				CPPAD_ASSERT_UNKNOWN( user_index == size_t(arg[0]) );
				CPPAD_ASSERT_UNKNOWN( user_id    == size_t(arg[1]) );
				CPPAD_ASSERT_UNKNOWN( user_n     == size_t(arg[2]) );
				CPPAD_ASSERT_UNKNOWN( user_m     == size_t(arg[3]) );
# ifndef NDEBUG
				if( ! user_ok )
				{	std::string msg = 
						atomic_base<Base>::class_name(user_index)
						+ ": atomic_base.forward: returned false";
					CPPAD_ASSERT_KNOWN(false, msg.c_str() );
				}
# endif
				user_state = user_start;
			}
			break;

			case UsrapOp:
			// parameter argument in an atomic operation sequence
			CPPAD_ASSERT_UNKNOWN( user_state == user_arg );
			CPPAD_ASSERT_UNKNOWN( user_j < user_n );
			CPPAD_ASSERT_UNKNOWN( size_t(arg[0]) < num_par );
			user_tx[user_j++] = parameter[ arg[0] ];
			if( user_j == user_n )
			{	// call users function for this operation
				user_atom->set_id(user_id);
				CPPAD_ATOMIC_CALL(user_q, user_p, 
					user_vx, user_vy, user_tx, user_ty
				);
				user_state = user_ret;
			}
			break;

			case UsravOp:
			// variable argument in an atomic operation sequence
			CPPAD_ASSERT_UNKNOWN( user_state == user_arg );
			CPPAD_ASSERT_UNKNOWN( user_j < user_n );
			CPPAD_ASSERT_UNKNOWN( size_t(arg[0]) <= i_var );
			user_tx[user_j++] = Taylor[ arg[0] * J + 0 ];
			if( user_j == user_n )
			{	// call users function for this operation
				user_atom->set_id(user_id);
				CPPAD_ATOMIC_CALL(user_q, user_p, 
					user_vx, user_vy, user_tx, user_ty
				);
				user_state = user_ret;
			}
			break;

			case UsrrpOp:
			// parameter result in an atomic operation sequence
			CPPAD_ASSERT_UNKNOWN( user_state == user_ret );
			CPPAD_ASSERT_UNKNOWN( user_i < user_m );
			user_i++;
			if( user_i == user_m )
				user_state = user_end;
			break;

			case UsrrvOp:
			// variable result in an atomic operation sequence
			CPPAD_ASSERT_UNKNOWN( user_state == user_ret );
			CPPAD_ASSERT_UNKNOWN( user_i < user_m );
			Taylor[ i_var * J + 0 ] = user_ty[user_i++];
			if( user_i == user_m )
				user_state = user_end;
			break;
			// -------------------------------------------------

			default:
			CPPAD_ASSERT_UNKNOWN(false);
		}
# if CPPAD_FORWARD0SWEEP_TRACE
		size_t       d      = 0;
		size_t       i_tmp  = i_var;
		Base*        Z_tmp  = Taylor + i_var * J;

		printOp(
			std::cout, 
			play,
			i_op,
			i_tmp,
			op, 
			arg,
			d + 1, 
			Z_tmp, 
			0, 
			(Base *) CPPAD_NULL
		);
	}
	std::cout << std::endl;
# else
	}
# endif
	CPPAD_ASSERT_UNKNOWN( user_state == user_start );
	CPPAD_ASSERT_UNKNOWN( i_var + 1 == play->num_rec_var() );

	return compareCount;
}

/*! \} */
} // END_CPPAD_NAMESPACE

// preprocessor symbols that are local to this file
# undef CPPAD_FORWARD0SWEEP_TRACE
# undef CPPAD_ATOMIC_CALL

# endif
