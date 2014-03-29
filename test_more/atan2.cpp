/* $Id: atan2.cpp 3083 2014-01-10 18:35:07Z bradbell $ */
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-14 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    GNU General Public License Version 3.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */

/*
Old example and test now just used for validation testing.
*/

# include <cppad/cppad.hpp>
# include <cmath>

namespace { // begin empty namespace

bool ad_ad(void)
{	bool ok = true;
	using CppAD::AD;

	AD< AD<double> > x(2.), y(2.);
	AD< AD<double> > z = atan2(y, x);
	CppAD::NearEqual( Value( Value(z) ), atan(1.), 1e-10, 1e-10 );

	return ok;
}

bool general(void)
{	bool ok = true;

	using CppAD::atan;
	using CppAD::sin;
	using CppAD::cos;
	using namespace CppAD;

	// independent variable vector
	CPPAD_TESTVECTOR(AD<double>) U(1);
	U[0]     = 1.;
	Independent(U);

	// a temporary values
	AD<double> x = cos(U[0]);
	AD<double> y = sin(U[0]); 

	// dependent variable vector 
	CPPAD_TESTVECTOR(AD<double>) Z(1);
	Z[0] = atan2(y, x); 

	// create f: U -> Z and vectors used for derivative calculations
	ADFun<double> f(U, Z); 
	CPPAD_TESTVECTOR(double) v(1);
	CPPAD_TESTVECTOR(double) w(1);

	// check original value (u in first quadrant)
	ok &= NearEqual(U[0] , Z[0],  1e-10 , 1e-10);

	// check case where u is in second quadrant
	v[0] = 3.;
	w    = f.Forward(0, v);
	ok  &= NearEqual(w[0] , v[0],  1e-10 , 1e-10);

	// check case where u is in third quadrant
	v[0] = -3.;
	w    = f.Forward(0, v);
	ok  &= NearEqual(w[0] , v[0],  1e-10 , 1e-10);

	// check case where u is in fourth quadrant
	v[0] = -1.;
	w    = f.Forward(0, v);
	ok  &= NearEqual(w[0] , v[0],  1e-10 , 1e-10);

	// forward computation of partials w.r.t. u
	size_t j;
	size_t p     = 5;
	double jfac  = 1.;
	double value = 1.;
	v[0]         = 1.;
	for(j = 1; j < p; j++)
	{	jfac *= j;
		w     = f.Forward(j, v);	
		ok &= NearEqual(jfac*w[0], value, 1e-10 , 1e-10); // d^jz/du^j
		v[0]  = 0.;
		value = 0.;
	}

	// reverse computation of partials of Taylor coefficients
	CPPAD_TESTVECTOR(double) r(p); 
	w[0]  = 1.;
	r     = f.Reverse(p, w);
	jfac  = 1.;
	value = 1.;
	for(j = 0; j < p; j++)
	{	ok &= NearEqual(jfac*r[j], value, 1e-10 , 1e-10); // d^jz/du^j
		jfac *= (j + 1);
		value = 0.;
	}

	return ok;
}

} // end empty namespace

bool atan2(void)
{	bool ok = true;
	ok     &= ad_ad();
	ok     &= general();

	return ok;
}
