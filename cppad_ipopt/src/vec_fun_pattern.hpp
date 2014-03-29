/* $Id: vec_fun_pattern.hpp 2622 2012-12-23 11:45:24Z bradbell $ */
# ifndef  CPPAD_VEC_FUN_PATTERN_INCLUDED
# define  CPPAD_VEC_FUN_PATTERN_INCLUDED
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-12 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    GNU General Public License Version 3.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */
# include "cppad_ipopt_nlp.hpp"
// ---------------------------------------------------------------------------
namespace cppad_ipopt {
// ---------------------------------------------------------------------------
/*!
\file vec_fun_pattern.hpp
\brief Determine sparsity pattern for a vector of AD fuction objects.

\ingroup vec_fun_pattern_cpp
*/

extern void vec_fun_pattern(
	size_t                                          K              ,
	const CppAD::vector<size_t>&                    p              ,
	const CppAD::vector<size_t>&                    q              ,
	const CppAD::vectorBool&                        retape         ,
	CppAD::vector< CppAD::ADFun<Ipopt::Number> >&   r_fun          ,
	CppAD::vector<CppAD::vectorBool>&               pattern_jac_r  ,
	CppAD::vector<CppAD::vectorBool>&               pattern_hes_r  
);

// ---------------------------------------------------------------------------
} // end namespace cppad_ipopt
// ---------------------------------------------------------------------------
# endif
