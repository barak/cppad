// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
// SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
// SPDX-FileContributor: 2003-22 Bradley M. Bell
// ----------------------------------------------------------------------------

/*
{xrst_begin rev_sparse_hes.cpp}

Reverse Mode Hessian Sparsity: Example and Test
###############################################

{xrst_literal
   // BEGIN C++
   // END C++
}

{xrst_end rev_sparse_hes.cpp}
*/
// BEGIN C++

# include <cppad/cppad.hpp>
namespace { // -------------------------------------------------------------

// expected sparsity pattern
bool check_f0[] = {
   false, false, false,  // partials w.r.t x0 and (x0, x1, x2)
   false, false, false,  // partials w.r.t x1 and (x0, x1, x2)
   false, false, true    // partials w.r.t x2 and (x0, x1, x2)
};
bool check_f1[] = {
   false,  true, false,  // partials w.r.t x0 and (x0, x1, x2)
   true,  false, false,  // partials w.r.t x1 and (x0, x1, x2)
   false, false, false   // partials w.r.t x2 and (x0, x1, x2)
};

// define the template function BoolCases<Vector> in empty namespace
template <class Vector> // vector class, elements of type bool
bool BoolCases(void)
{  bool ok = true;
   using CppAD::AD;

   // domain space vector
   size_t n = 3;
   CPPAD_TESTVECTOR(AD<double>) ax(n);
   ax[0] = 0.;
   ax[1] = 1.;
   ax[2] = 2.;

   // declare independent variables and start recording
   CppAD::Independent(ax);

   // range space vector
   size_t m = 2;
   CPPAD_TESTVECTOR(AD<double>) ay(m);
   ay[0] = sin( ax[2] );
   ay[1] = ax[0] * ax[1];

   // create f: x -> y and stop tape recording
   CppAD::ADFun<double> f(ax, ay);

   // sparsity pattern for the identity matrix
   Vector r(n * n);
   size_t i, j;
   for(i = 0; i < n; i++)
   {  for(j = 0; j < n; j++)
         r[ i * n + j ] = (i == j);
   }

   // compute sparsity pattern for J(x) = F^{(1)} (x)
   f.ForSparseJac(n, r);

   // compute sparsity pattern for H(x) = F_0^{(2)} (x)
   Vector s(m);
   for(i = 0; i < m; i++)
      s[i] = false;
   s[0] = true;
   Vector h(n * n);
   h    = f.RevSparseHes(n, s);

   // check values
   for(i = 0; i < n; i++)
      for(j = 0; j < n; j++)
         ok &= (h[ i * n + j ] == check_f0[ i * n + j ] );

   // compute sparsity pattern for H(x) = F_1^{(2)} (x)
   for(i = 0; i < m; i++)
      s[i] = false;
   s[1] = true;
   h    = f.RevSparseHes(n, s);

   // check values
   for(i = 0; i < n; i++)
      for(j = 0; j < n; j++)
         ok &= (h[ i * n + j ] == check_f1[ i * n + j ] );

   // call that transposed the result
   bool transpose = true;
   h    = f.RevSparseHes(n, s, transpose);

   // This h is symmetric, because R is symmetric, not really testing here
   for(i = 0; i < n; i++)
      for(j = 0; j < n; j++)
         ok &= (h[ j * n + i ] == check_f1[ i * n + j ] );

   return ok;
}
// define the template function SetCases<Vector> in empty namespace
template <class Vector> // vector class, elements of type std::set<size_t>
bool SetCases(void)
{  bool ok = true;
   using CppAD::AD;

   // domain space vector
   size_t n = 3;
   CPPAD_TESTVECTOR(AD<double>) ax(n);
   ax[0] = 0.;
   ax[1] = 1.;
   ax[2] = 2.;

   // declare independent variables and start recording
   CppAD::Independent(ax);

   // range space vector
   size_t m = 2;
   CPPAD_TESTVECTOR(AD<double>) ay(m);
   ay[0] = sin( ax[2] );
   ay[1] = ax[0] * ax[1];

   // create f: x -> y and stop tape recording
   CppAD::ADFun<double> f(ax, ay);

   // sparsity pattern for the identity matrix
   Vector r(n);
   size_t i;
   for(i = 0; i < n; i++)
   {  assert( r[i].empty() );
      r[i].insert(i);
   }

   // compute sparsity pattern for J(x) = F^{(1)} (x)
   f.ForSparseJac(n, r);

   // compute sparsity pattern for H(x) = F_0^{(2)} (x)
   Vector s(1);
   assert( s[0].empty() );
   s[0].insert(0);
   Vector h(n);
   h    = f.RevSparseHes(n, s);

   // check values
   std::set<size_t>::iterator itr;
   size_t j;
   for(i = 0; i < n; i++)
   {  for(j = 0; j < n; j++)
      {  bool found = h[i].find(j) != h[i].end();
         ok        &= (found == check_f0[i * n + j]);
      }
   }

   // compute sparsity pattern for H(x) = F_1^{(2)} (x)
   s[0].clear();
   assert( s[0].empty() );
   s[0].insert(1);
   h    = f.RevSparseHes(n, s);

   // check values
   for(i = 0; i < n; i++)
   {  for(j = 0; j < n; j++)
      {  bool found = h[i].find(j) != h[i].end();
         ok        &= (found == check_f1[i * n + j]);
      }
   }

   // call that transposed the result
   bool transpose = true;
   h    = f.RevSparseHes(n, s, transpose);

   // This h is symmetric, because R is symmetric, not really testing here
   for(i = 0; i < n; i++)
   {  for(j = 0; j < n; j++)
      {  bool found = h[j].find(i) != h[j].end();
         ok        &= (found == check_f1[i * n + j]);
      }
   }

   return ok;
}
} // End empty namespace

# include <vector>
# include <valarray>
bool rev_sparse_hes(void)
{  bool ok = true;
   // Run with Vector equal to four different cases
   // all of which are Simple Vectors with elements of type bool.
   ok &= BoolCases< CppAD::vector  <bool> >();
   ok &= BoolCases< CppAD::vectorBool     >();
   ok &= BoolCases< std::vector    <bool> >();
   ok &= BoolCases< std::valarray  <bool> >();

   // Run with Vector equal to two different cases both of which are
   // Simple Vectors with elements of type std::set<size_t>
   typedef std::set<size_t> set;
   ok &= SetCases< CppAD::vector  <set> >();
   ok &= SetCases< std::vector    <set> >();

   // Do not use valarray because its element access in the const case
   // returns a copy instead of a reference
   // ok &= SetCases< std::valarray  <set> >();

   return ok;
}


// END C++
