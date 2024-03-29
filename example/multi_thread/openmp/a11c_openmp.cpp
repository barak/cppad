// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
// SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
// SPDX-FileContributor: 2003-22 Bradley M. Bell
// ----------------------------------------------------------------------------

/*
{xrst_begin a11c_openmp.cpp}

A Simple OpenMP Example and Test
################################

Purpose
*******
This example just demonstrates OpenMP and does not use CppAD at all.

Source Code
***********
{xrst_literal
   // BEGIN C++
   // END C++
}

{xrst_end a11c_openmp.cpp}
----------------------------------------------------------------------------
*/
// BEGIN C++
# include <omp.h>
# include <limits>
# include <cmath>
# include <cassert>
// for size_t
# include <cstddef>
//
# define NUMBER_THREADS 4

namespace {
   // Beginning of Example A.1.1.1c of OpenMP 2.5 standard document ---------
   void a1(int n, float *a, float *b)
   {  // Original had 'int i;' instead of 'int i = 0;'
      // Silence warning by clang 9.0.0: variable 'i' is uninitialized.
      int i = 0;
   # pragma omp parallel for
      for(i = 1; i < n; i++) /* i is private by default */
      {  assert( omp_get_num_threads() == NUMBER_THREADS );
         b[i] = (a[i] + a[i-1]) / float(2);
      }
   }
   // End of Example A.1.1.1c of OpenMP 2.5 standard document ---------------
}
bool a11c(void)
{  bool ok = true;

   // Test setup
   size_t i, n = 1000;
   float *a = new float[n];
   float *b = new float[n];
   for(i = 0; i < n; i++)
      a[i] = float(i);

   int n_thread = NUMBER_THREADS;   // number of threads in parallel regions
   omp_set_dynamic(0);              // off dynamic thread adjust
   omp_set_num_threads(n_thread);   // set the number of threads

   a1(int(n), a, b);

   // check the result
   float eps = float(100) * std::numeric_limits<float>::epsilon();
   for(i = 1; i < n ; i++)
      ok &= std::fabs( (float(2) * b[i] - a[i] - a[i-1]) / b[i] ) <= eps;

   delete [] a;
   delete [] b;

   return ok;
}
// END C++
