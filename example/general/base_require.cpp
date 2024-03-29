// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
// SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
// SPDX-FileContributor: 2003-23 Bradley M. Bell
// ----------------------------------------------------------------------------
/*
{xrst_begin base_require.cpp}

Using a User Defined AD Base Type: Example and Test
###################################################

{xrst_literal
   // BEGIN C++
   // END C++
}

Purpose
*******
The type ``base_alloc`` , defined in :ref:`base_alloc.hpp-name` ,
meets the requirements specified by :ref:`base_require-name`
for *Base* in ``AD`` < *Base* > .
The program below is an example use of ``AD<base_alloc>`` .

{xrst_end base_require.cpp}
*/
// BEGIN C++
// suppress conversion warnings before other includes
# include <cppad/wno_conversion.hpp>
//
# include "base_alloc.hpp"
# include <cppad/cppad.hpp>

bool base_require(void)
{  bool ok = true;
   using CppAD::thread_alloc;
   typedef CppAD::AD<base_alloc> ad_base_alloc;

   // check the amount of memory inuse by this thread (thread zero)
   size_t thread = thread_alloc::thread_num();
   ok &= thread == 0;

   // y = x^2
   size_t n = 1, m = 1;
   CPPAD_TESTVECTOR(ad_base_alloc) a_x(n), a_y(m);
   a_x[0] = ad_base_alloc(1.);
   CppAD::Independent(a_x);
   a_y[0] = a_x[0] * a_x[0];
   CppAD::ADFun<base_alloc> f(a_x, a_y);

   // check function value f(x) = x^2
   CPPAD_TESTVECTOR(base_alloc) x(n), y(m);
   base_alloc eps =
      base_alloc(100.) * CppAD::numeric_limits<base_alloc>::epsilon();
   x[0] = base_alloc(3.);
   y    = f.Forward(0, x);
   ok  &= CppAD::NearEqual(y[0], x[0] * x[0], eps, eps);

   // check derivative value f'(x) = 2 * x
   CPPAD_TESTVECTOR(base_alloc) dy(m * n);
   dy   = f.Jacobian(x);
   ok  &= CppAD::NearEqual(dy[0], base_alloc(2.) * x[0], eps, eps);

   // check the abs function
   ok  &= abs( - a_x[0] ) == abs( a_x[0] );

   return ok;
}
// END C++
