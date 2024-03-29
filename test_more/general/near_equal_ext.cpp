// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
// SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
// SPDX-FileContributor: 2003-22 Bradley M. Bell
// ----------------------------------------------------------------------------

/*
Old example now just used for validation testing
*/

# include <cppad/cppad.hpp>
# include <complex>

bool near_equal_ext(void)
{  bool ok = true;
   using CppAD::AD;
   using CppAD::NearEqual;

   // double
   double x    = 1.00000;
   double y    = 1.00001;
   double a    =  .00005;
   double r    =  .00005;
   double zero = 0.;
   double inf  = 1. / zero;
   double nan  = 0. / zero;

   // AD<double>
   AD<double> X(x);
   AD<double> Y(y);
   AD<double> Inf(inf);
   AD<double> Nan(nan);

   ok &= NearEqual(X, Y, zero, a);
   ok &= NearEqual(X, y, zero, a);
   ok &= NearEqual(x, Y, zero, a);

   ok &= ! NearEqual(X, Y, zero, a/25.);
   ok &= ! NearEqual(X, y, zero, a/25.);
   ok &= ! NearEqual(x, Y, zero, a/25.);

   ok &= NearEqual(X, Y, r, zero);
   ok &= NearEqual(X, y, r, zero);
   ok &= NearEqual(x, Y, r, zero);

   ok &= ! NearEqual(X, Y, r/25., zero);
   ok &= ! NearEqual(X, y, r/25., zero);
   ok &= ! NearEqual(x, Y, r/25., zero);

   ok &= ! NearEqual(Inf, Inf, r, a);
   ok &= ! NearEqual(Inf, inf, r, a);
   ok &= ! NearEqual(inf, Inf, r, a);

   ok &= ! NearEqual(-Inf, -Inf, r, a);
   ok &= ! NearEqual(-Inf, -inf, r, a);
   ok &= ! NearEqual(-inf, -Inf, r, a);

   ok &= ! NearEqual(Nan, Nan, r, a);
   ok &= ! NearEqual(Nan, nan, r, a);
   ok &= ! NearEqual(nan, Nan, r, a);

   return ok;
}
