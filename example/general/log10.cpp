// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
// SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
// SPDX-FileContributor: 2003-22 Bradley M. Bell
// ----------------------------------------------------------------------------

/*
{xrst_begin log10.cpp}

The AD log10 Function: Example and Test
#######################################

{xrst_literal
   // BEGIN C++
   // END C++
}

{xrst_end log10.cpp}
*/
// BEGIN C++

# include <cppad/cppad.hpp>

bool log10(void)
{  bool ok = true;

   using CppAD::AD;
   using CppAD::NearEqual;
   double eps99 = 99.0 * std::numeric_limits<double>::epsilon();

   // domain space vector
   size_t n  = 1;
   double x0 = 0.5;
   CPPAD_TESTVECTOR(AD<double>) x(n);
   x[0]      = x0;

   // declare independent variables and start tape recording
   CppAD::Independent(x);

   // ten raised to the x0 power
   AD<double> ten = 10.;
   AD<double> pow_10_x0 = CppAD::pow(ten, x[0]);

   // range space vector
   size_t m = 1;
   CPPAD_TESTVECTOR(AD<double>) y(m);
   y[0] = CppAD::log10(pow_10_x0);

   // create f: x -> y and stop tape recording
   CppAD::ADFun<double> f(x, y);

   // check value
   ok &= NearEqual(y[0] , x0, eps99, eps99);

   // forward computation of first partial w.r.t. x[0]
   CPPAD_TESTVECTOR(double) dx(n);
   CPPAD_TESTVECTOR(double) dy(m);
   dx[0] = 1.;
   dy    = f.Forward(1, dx);
   ok   &= NearEqual(dy[0], 1., eps99, eps99);

   // reverse computation of derivative of y[0]
   CPPAD_TESTVECTOR(double)  w(m);
   CPPAD_TESTVECTOR(double) dw(n);
   w[0]  = 1.;
   dw    = f.Reverse(1, w);
   ok   &= NearEqual(dw[0], 1., eps99, eps99);

   // use a VecAD<Base>::reference object with log10
   CppAD::VecAD<double> v(1);
   AD<double> zero(0);
   v[zero]           = pow_10_x0;
   AD<double> result = CppAD::log10(v[zero]);
   ok   &= NearEqual(result, x0, eps99, eps99);

   return ok;
}

// END C++
