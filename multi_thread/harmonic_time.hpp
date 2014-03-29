/* $Id: harmonic_time.hpp 2506 2012-10-24 19:36:49Z bradbell $ */
# ifndef CPPAD_HARMONIC_TIME_INCLUDED
# define CPPAD_HARMONIC_TIME_INCLUDED
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-11 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    GNU General Public License Version 3.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */

bool harmonic_time(
	double& time_out, double test_time, size_t n_thread, size_t mega_sum);

# endif
