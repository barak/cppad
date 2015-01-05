/* $Id: sparse_jacobian.cpp 3138 2014-03-02 18:46:11Z bradbell $ */
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-14 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    GNU General Public License Version 3.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */
# include <cstring>
# include <cppad/vector.hpp>

/*
$begin sacado_sparse_jacobian.cpp$$
$spell
	const
	bool
	CppAD
	sacado
	sparse_jacobian
$$

$section sacado Speed: sparse_jacobian$$

$codep */
// A sacado version of this test is not yet available
bool link_sparse_jacobian(
	size_t                           size     , 
	size_t                           repeat   , 
	size_t                           m        ,
	const CppAD::vector<size_t>&     row      ,
	const CppAD::vector<size_t>&     col      ,
	      CppAD::vector<double>&     x        ,
	      CppAD::vector<double>&     jacobian ,
	      size_t&                    n_sweep  )
{
	return false;
}
/* $$
$end
*/
