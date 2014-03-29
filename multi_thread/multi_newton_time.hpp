/* $Id: multi_newton_time.hpp 2506 2012-10-24 19:36:49Z bradbell $ */
# ifndef CPPAD_MULTI_NEWTON_TIME_INCLUDED
# define CPPAD_MULTI_NEWTON_TIME_INCLUDED
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-11 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    GNU General Public License Version 3.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */

bool multi_newton_time(
	double& time_out      ,
	double  test_time     ,
	size_t  num_thread    ,
	size_t  num_zero      ,
	size_t  num_sub       , 
	size_t  num_sum       ,
	bool    use_ad
); 

# endif
