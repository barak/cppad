// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
// SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
// SPDX-FileContributor: 2003-22 Bradley M. Bell
// ----------------------------------------------------------------------------

/*
Test the using standard math functions with AD< AD<double> >
*/

# include <cppad/cppad.hpp>

typedef CppAD::AD<double>      ADdouble;
typedef CppAD::AD< ADdouble > ADDdouble;

bool std_math(void)
{  using CppAD::NearEqual;
   bool ok = true;
   ADDdouble half(.5);
   ADDdouble one(1.);
   ADDdouble two(2.);
   ADDdouble ten(10.);
   ADDdouble eps(1e-6);
   ADDdouble pi_4(3.141592653 / 4.);
   ADDdouble root_2( sqrt(two) );

   ADDdouble y( acos(one / root_2) );
   ok &= NearEqual( pi_4, y, eps, eps );

   y = cos(pi_4);
   ok &= NearEqual( one / root_2, y, eps, eps );

   y = asin(one / root_2);
   ok &= NearEqual( pi_4, y, eps, eps );

   y = sin(pi_4);
   ok &= NearEqual( one / root_2, y, eps, eps );

   y = atan(one);
   ok &= NearEqual( pi_4, y, eps, eps );

   y = tan(pi_4);
   ok &= NearEqual( one, y, eps, eps );

   y = two * cosh(one);
   ok &= NearEqual( exp(one) + exp(-one), y, eps, eps );

   y = two * sinh(one);
   ok &= NearEqual( exp(one) - exp(-one), y, eps, eps );

   y = log( exp(one) );
   ok &= NearEqual( one, y, eps, eps );

   y = log10( exp( log(ten) ) );
   ok &= NearEqual( one, y, eps, eps );

   return ok;
}
