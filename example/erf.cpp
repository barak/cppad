/* $Id: erf.cpp 3499 2014-12-24 15:31:55Z bradbell $ */
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-12 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    GNU General Public License Version 3.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */

/*
$begin erf.cpp$$
$spell
	tan
	erf
$$

$section The AD erf Function: Example and Test$$

$index erf, example$$
$index example, erf$$
$index test, erf$$

$code
$verbatim%example/erf.cpp%0%// BEGIN C++%// END C++%1%$$
$$

$end
*/
// BEGIN C++

# include <cppad/cppad.hpp>
# include <cmath>
# include <limits>

bool Erf(void)
{	bool ok = true;

	using CppAD::AD;
	using CppAD::NearEqual;
	double eps = 10. * CppAD::numeric_limits<double>::epsilon();

	// domain space vector
	size_t n  = 1;
	double x0 = 0.5;
	CPPAD_TESTVECTOR(AD<double>) ax(n);
	ax[0]     = x0;

	// declare independent variables and start tape recording
	CppAD::Independent(ax);

	// range space vector 
	size_t m = 1;
	CPPAD_TESTVECTOR(AD<double>) ay(m);
	ay[0] = CppAD::erf(ax[0]);

	// create f: x -> y and stop tape recording
	CppAD::ADFun<double> f(ax, ay); 

	// check relative erorr 
	double erf_x0 = 0.52050;
	ok &= NearEqual(ay[0] , erf_x0,  0.,    4e-4);
# if CPPAD_COMPILER_HAS_ERF
	ok &= NearEqual(ay[0] , erf_x0,  0.,    1e-5);
# endif

	// value of derivative of erf at x0
	double pi     = 4. * std::atan(1.);
	double factor = 2. / sqrt(pi);
	double check  = factor * std::exp(-x0 * x0);

	// forward computation of first partial w.r.t. x[0]
	CPPAD_TESTVECTOR(double) dx(n);
	CPPAD_TESTVECTOR(double) dy(m);
	dx[0] = 1.;
	dy    = f.Forward(1, dx);
	ok   &= NearEqual(dy[0], check,  0.,  1e-3);
# if CPPAD_COMPILER_HAS_ERF
	ok   &= NearEqual(dy[0], check,  0.,  eps);
# endif

	// reverse computation of derivative of y[0]
	CPPAD_TESTVECTOR(double)  w(m);
	CPPAD_TESTVECTOR(double) dw(n);
	w[0]  = 1.;
	dw    = f.Reverse(1, w);
	ok   &= NearEqual(dw[0], check,  0., 1e-1);
# if CPPAD_COMPILER_HAS_ERF
	ok   &= NearEqual(dw[0], check,  0., eps);
# endif

	// use a VecAD<Base>::reference object with erf
	CppAD::VecAD<double> v(1);
	AD<double> zero(0);
	v[zero]           = x0;
	AD<double> result = CppAD::erf(v[zero]);
	ok   &= NearEqual(result, ay[0], eps, eps);

	// use a double with erf
	ok   &= NearEqual(CppAD::erf(x0), ay[0], eps, eps);

	return ok;
}

// END C++
