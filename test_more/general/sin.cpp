// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
// SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
// SPDX-FileContributor: 2003-22 Bradley M. Bell
// ----------------------------------------------------------------------------

/*
Old example now just used for validation testing.
*/
# include <cppad/cppad.hpp>

bool Sin(void)
{  bool ok = true;
   using CppAD::sin;
   using CppAD::cos;
   using namespace CppAD;
   double eps99 = 99.0 * std::numeric_limits<double>::epsilon();

   // independent variable vector
   CPPAD_TESTVECTOR(AD<double>) U(1);
   U[0]     = 1.;
   Independent(U);

   // dependent variable vector
   CPPAD_TESTVECTOR(AD<double>) Z(1);
   Z[0] = sin(U[0]);

   // create f: U -> Z and vectors used for derivative calculations
   ADFun<double> f(U, Z);
   CPPAD_TESTVECTOR(double) v(1);
   CPPAD_TESTVECTOR(double) w(1);

   // check value
   double sin_u = sin( Value(U[0]) );
   double cos_u = cos( Value(U[0]) );

   ok &= NearEqual(sin_u, Value(Z[0]),  eps99 , eps99);

   // forward computation of partials w.r.t. u
   size_t j;
   size_t p     = 5;
   double jfac  = 1.;
   v[0]         = 1.;
   for(j = 1; j < p; j++)
   {  w     = f.Forward(j, v);

      double value;
      if( j % 4 == 1 )
         value = cos_u;
      else if( j % 4 == 2 )
         value = -sin_u;
      else if( j % 4 == 3 )
         value = -cos_u;
      else
         value = sin_u;

      jfac *= double(j);
      ok &= NearEqual(w[0], value/jfac, eps99, eps99); // d^jz/du^j
      v[0]  = 0.;
   }

   // reverse computation of partials of Taylor coefficients
   CPPAD_TESTVECTOR(double) r(p);
   w[0]  = 1.;
   r     = f.Reverse(p, w);
   jfac  = 1.;
   for(j = 0; j < p; j++)
   {
      double value;
      if( j % 4 == 0 )
         value = cos_u;
      else if( j % 4 == 1 )
         value = -sin_u;
      else if( j % 4 == 2 )
         value = -cos_u;
      else
         value = sin_u;

      ok &= NearEqual(r[j], value/jfac, eps99, eps99); // d^jz/du^j

      jfac *= double(j + 1);
   }

   return ok;
}
