// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
// SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
// SPDX-FileContributor: 2003-22 Bradley M. Bell
// ----------------------------------------------------------------------------

/*
{xrst_begin det_by_lu.cpp}

Determinant Using Lu Factorization: Example and Test
####################################################

{xrst_literal
   // BEGIN C++
   // END C++
}

{xrst_end det_by_lu.cpp}
*/
// BEGIN C++

# include <cppad/cppad.hpp>
# include <cppad/speed/det_by_lu.hpp>

bool det_by_lu()
{  bool ok = true;
   double eps99 = 99.0 * std::numeric_limits<double>::epsilon();

   // dimension of the matrix
   size_t n = 3;

   // construct the determinat object
   CppAD::det_by_lu<double> Det(n);

   double  a[] = {
      1., 2., 3.,  // a[0] a[1] a[2]
      3., 2., 1.,  // a[3] a[4] a[5]
      2., 1., 2.   // a[6] a[7] a[8]
   };
   CPPAD_TESTVECTOR(double) A(9);
   size_t i;
   for(i = 0; i < 9; i++)
      A[i] = a[i];


   // evaluate the determinant
   double det = Det(A);

   double check;
   check = a[0]*(a[4]*a[8] - a[5]*a[7])
          - a[1]*(a[3]*a[8] - a[5]*a[6])
          + a[2]*(a[3]*a[7] - a[4]*a[6]);

   ok = CppAD::NearEqual(det, check, eps99, eps99);

   return ok;
}

// END C++
