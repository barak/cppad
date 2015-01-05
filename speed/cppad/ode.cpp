/* $Id: ode.cpp 3311 2014-05-28 16:21:08Z bradbell $ */
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-14 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    GNU General Public License Version 3.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */
/*
$begin cppad_ode.cpp$$
$spell
	jacobian jacobian
	endif
	var
	Jacobian
	std
	cout
	endl
	CppAD
	cppad
	hpp
	bool
	onetape
	typedef
	cassert
$$

$section CppAD Speed: Gradient of Ode Solution$$

$index link_ode, cppad$$
$index cppad, link_ode$$
$index speed, cppad$$
$index cppad, speed$$
$index ode, speed cppad$$

$head Specifications$$
See $cref link_ode$$.

$head Implementation$$

$codep */
# include <cppad/cppad.hpp>
# include <cppad/speed/ode_evaluate.hpp>
# include <cppad/speed/uniform_01.hpp>
# include <cassert>

// Note that CppAD uses global_memory at the main program level
extern bool
	global_onetape, global_atomic, global_optimize;

bool link_ode(
	size_t                     size       ,
	size_t                     repeat     ,
	CppAD::vector<double>      &x         ,
	CppAD::vector<double>      &jacobian
)
{
	// speed test global option values
	if( global_atomic )
		return false;

	// --------------------------------------------------------------------
	// setup
	assert( x.size() == size );
	assert( jacobian.size() == size * size );

	typedef CppAD::AD<double>       ADScalar;
	typedef CppAD::vector<ADScalar> ADVector;

	size_t j;
	size_t p = 0;              // use ode to calculate function values
	size_t n = size;           // number of independent variables
	size_t m = n;              // number of dependent variables
	ADVector  X(n), Y(m);      // independent and dependent variables
	CppAD::ADFun<double>  f;   // AD function

	// -------------------------------------------------------------
	if( ! global_onetape ) while(repeat--)
	{ 	// choose next x value
		uniform_01(n, x);
		for(j = 0; j < n; j++)
			X[j] = x[j];

		// declare the independent variable vector
		Independent(X);

		// evaluate function
		CppAD::ode_evaluate(X, p, Y);

		// create function object f : X -> Y
		f.Dependent(X, Y);

		if( global_optimize )
			f.optimize();

		jacobian = f.Jacobian(x);
	}
	else
	{ 	// an x value
		uniform_01(n, x);
		for(j = 0; j < n; j++)
			X[j] = x[j];

		// declare the independent variable vector
		Independent(X);

		// evaluate function
		CppAD::ode_evaluate(X, p, Y);

		// create function object f : X -> Y
		f.Dependent(X, Y);

		if( global_optimize )
			f.optimize();
		while(repeat--)
		{	// get next argument value
			uniform_01(n, x);

			// evaluate jacobian
			jacobian = f.Jacobian(x);
		}
	}
	return true;
}
/* $$
$end
*/
