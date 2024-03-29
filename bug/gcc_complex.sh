#! /bin/bash -e
# SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
# SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
# SPDX-FileContributor: 2003-22 Bradley M. Bell
# ----------------------------------------------------------------------------
echo_eval() {
   echo $*
   eval $*
}
# -----------------------------------------------
echo "create gcc_complex.cpp"
cat << EOF > gcc_complex.cpp
# include <complex>
# include <iostream>
# include <limits>

int main(void)
{  double inf = std::numeric_limits<double>::infinity();
   std::complex<double> c_inf( inf );
   std::complex<double> c_1( 1. );

   std::cout << "c_inf      = " << c_inf << std::endl;
   std::cout << "c_1        = "   << c_1 << std::endl;
   std::cout << "c_inf / c1 = " << c_inf / c_1 << std::endl;

   return 0;
}
EOF
echo_eval g++ gcc_complex.cpp -o gcc_complex
echo_eval ./gcc_complex
cat << EOF
Explination:

(x + i*y)     (x + i*y) * (a - i*b)     (x*a - y*b) + i*(y*a - x*b)
---------  =  ---------------------  =  ---------------------------
(a + i*b)     (a + i*b) * (a - i*b)             a*a + b*b

In our case x = inf, y = 0, a = 1, b = 0, so we have

(x + i*y)    (inf*1 - 0*0) + i*(0*1 - inf*0)
---------  =  ------------------------------ =  inf - i*nan
(a + i*b)            1*1 + 0*0
EOF
echo_eval rm gcc_complex.cpp gcc_complex
