/* $Id: forward.cpp 2506 2012-10-24 19:36:49Z bradbell $ */
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-12 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    GNU General Public License Version 3.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */

/*
$begin forward.cpp$$
$spell
	Cpp
$$

$section Forward Mode: Example and Test$$
$index Forward$$
$index example, Forward$$
$index test, Forward$$

$code
$verbatim%example/forward.cpp%0%// BEGIN C++%// END C++%1%$$
$$

$end
*/
// BEGIN C++
# include <cppad/cppad.hpp>
namespace { // --------------------------------------------------------
// define the template function ForwardCases<Vector> in empty namespace
template <class Vector> 
bool ForwardCases(void)
{	bool ok = true;
	using CppAD::AD;
	using CppAD::NearEqual;

	// domain space vector
	size_t n = 2;
	CPPAD_TESTVECTOR(AD<double>) X(n);
	X[0] = 0.; 
	X[1] = 1.;

	// declare independent variables and starting recording
	CppAD::Independent(X);

	// range space vector
	size_t m = 1;
	CPPAD_TESTVECTOR(AD<double>) Y(m);
	Y[0] = X[0] * X[0] * X[1];

	// create f: X -> Y and stop tape recording
	CppAD::ADFun<double> f(X, Y);

	// initially, the variable values during taping are stored in f
	ok &= f.size_taylor() == 1;

	// zero order forward mode using notaiton in ForwardZero
	// use the template parameter Vector for the vector type
	Vector x(n);
	Vector y(m);
	x[0] = 3.;
	x[1] = 4.;
	y    = f.Forward(0, x);
	ok  &= NearEqual(y[0] , x[0]*x[0]*x[1], 1e-10, 1e-10);
	ok  &= f.size_taylor() == 1;

	// first order forward mode using notation in ForwardOne
	// X(t)           = x + dx * t
	// Y(t) = F[X(t)] = y + dy * t + o(t)
	Vector dx(n);
	Vector dy(m);
	dx[0] = 1.;
	dx[1] = 0.;
	dy    = f.Forward(1, dx); // partial F w.r.t. x[0]
	ok   &= NearEqual(dy[0] , 2.*x[0]*x[1], 1e-10, 1e-10);
	ok   &= f.size_taylor() == 2;

	// second order forward mode using notaiton in ForwardAny
	// X(t) =           x + dx * t + x_2 * t^2
	// Y(t) = F[X(t)] = y + dy * t + y_2 * t^2 + o(t^3)
	Vector x_2(n);
	Vector y_2(m);
	x_2[0]      = 0.;
	x_2[1]      = 0.;
	y_2         = f.Forward(2, x_2);
	double F_00 = 2. * y_2[0]; // second partial F w.r.t. x[0], x[0]
	ok         &= NearEqual(F_00, 2.*x[1], 1e-10, 1e-10);
	ok         &= f.size_taylor() == 3;

	return ok;
}
} // End empty namespace 
# include <vector>
# include <valarray>
bool Forward(void)
{	bool ok = true;
	// Run with Vector equal to three different cases
	// all of which are Simple Vectors with elements of type double.
	ok &= ForwardCases< CppAD::vector  <double> >();
	ok &= ForwardCases< std::vector    <double> >();
	ok &= ForwardCases< std::valarray  <double> >();
	return ok;
}
// END C++
