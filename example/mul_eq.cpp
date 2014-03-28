/* $Id: mul_eq.cpp 2506 2012-10-24 19:36:49Z bradbell $ */
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-12 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    Eclipse Public License Version 1.0.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */

/*
$begin mul_eq.cpp$$

$section AD Computed Assignment Multiplication: Example and Test$$

$index *=, AD example$$
$index computed, AD assignment multiply example$$
$index assignment, AD computed multiply example$$
$index example, AD computed assignment multiply$$
$index test, AD computed assignment multiply$$

$index computed, *= example$$
$index assign, *= example$$
$index plus, *= example$$
$index add, *= example$$

$code
$verbatim%example/mul_eq.cpp%0%// BEGIN C++%// END C++%1%$$
$$

$end
*/
// BEGIN C++
# include <cppad/cppad.hpp>

bool MulEq(void)
{	bool ok = true;
	using CppAD::AD;
	using CppAD::NearEqual;

	// domain space vector
	size_t  n = 1;
	double x0 = .5;
	CPPAD_TESTVECTOR(AD<double>) x(n);
	x[0]      = x0; 

	// declare independent variables and start tape recording
	CppAD::Independent(x);

	// range space vector 
	size_t m = 2;
	CPPAD_TESTVECTOR(AD<double>) y(m);
	y[0] = x[0];         // initial value
	y[0] *= 2;           // AD<double> *= int
	y[0] *= 4.;          // AD<double> *= double
	y[1] = y[0] *= x[0]; // use the result of a computed assignment

	// create f: x -> y and stop tape recording
	CppAD::ADFun<double> f(x, y); 

	// check value 
	ok &= NearEqual(y[0] , x0*2.*4.*x0,  1e-10 , 1e-10);
	ok &= NearEqual(y[1] ,        y[0],  1e-10 , 1e-10);

	// forward computation of partials w.r.t. x[0]
	CPPAD_TESTVECTOR(double) dx(n);
	CPPAD_TESTVECTOR(double) dy(m);
	dx[0] = 1.;
	dy    = f.Forward(1, dx);
	ok   &= NearEqual(dy[0], 8.*2.*x0, 1e-10, 1e-10);
	ok   &= NearEqual(dy[1], 8.*2.*x0, 1e-10, 1e-10);

	// reverse computation of derivative of y[0]
	CPPAD_TESTVECTOR(double)  w(m);
	CPPAD_TESTVECTOR(double) dw(n);
	w[0]  = 1.;
	w[1]  = 0.;
	dw    = f.Reverse(1, w);
	ok   &= NearEqual(dw[0], 8.*2.*x0, 1e-10, 1e-10);

	// use a VecAD<Base>::reference object with computed multiplication
	CppAD::VecAD<double> v(1);
	AD<double> zero(0);
	AD<double> result = 1;
	v[zero] = 2;
	result *= v[zero];
	ok     &= (result == 2);

	return ok;
}

// END C++
