// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
// SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
// SPDX-FileContributor: 2003-22 Bradley M. Bell
// ----------------------------------------------------------------------------

/*
{xrst_begin eigen_array.cpp}

Using Eigen Arrays: Example and Test
####################################

{xrst_literal
   // BEGIN C++
   // END C++
}

{xrst_end eigen_array.cpp}
*/
// BEGIN C++
# include <cppad/cppad.hpp>
# include <cppad/example/cppad_eigen.hpp>

bool eigen_array(void)
{  bool ok = true;
   using CppAD::AD;
   using CppAD::NearEqual;
   //
   typedef CppAD::eigen_vector< AD<double> > a_vector;
   //
   // domain and range space vectors
   size_t n  = 10, m = n;
   a_vector a_x(n), a_y(m);

   // set and declare independent variables and start tape recording
   for(size_t j = 0; j < n; j++)
      a_x[j] = double(1 + j);
   CppAD::Independent(a_x);

   // evaluate a component wise function
   for(size_t j = 0; j < n; j++)
      a_y[j] = a_x[j] + sin( a_x[j] );

   // create f: x -> y and stop tape recording
   CppAD::ADFun<double> f(a_x, a_y);

   // compute the derivative of y w.r.t x using CppAD
   CPPAD_TESTVECTOR(double) x(n);
   for(size_t j = 0; j < n; j++)
      x[j] = double(j) + 1.0 / double(j+1);
   CPPAD_TESTVECTOR(double) jac = f.Jacobian(x);

   // check Jacobian
   double eps = 100. * CppAD::numeric_limits<double>::epsilon();
   for(size_t i = 0; i < m; i++)
   {  for(size_t j = 0; j < n; j++)
      {  double check = 1.0 + cos(x[i]);
         if( i != j )
            check = 0.0;
         ok &= NearEqual(jac[i * n + j], check, eps, eps);
      }
   }

   return ok;
}

// END C++
