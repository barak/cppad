#! /bin/bash -e
# $Id: eigen_io.sh 3020 2013-12-10 12:46:20Z bradbell $
# -----------------------------------------------------------------------------
# CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-13 Bradley M. Bell
#
# CppAD is distributed under multiple licenses. This distribution is under
# the terms of the 
#                     GNU General Public License Version 3.
#
# A copy of this license is included in the COPYING file of this distribution.
# Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
# -----------------------------------------------------------------------------
if [ ! -e build ]
then
	mkdir build
fi
cd build
echo "$0"
name=`echo $0 | sed -e 's|.*/||' -e 's|\..*||'`
#
cat << EOF > $name.cpp
# include <cppad/cppad.hpp>
# include <cppad/example/cppad_eigen.hpp>

int main()
{	
	typedef Eigen::Matrix< CppAD::AD<double>, 2, 2> MatrixAD;
	MatrixAD X;
	X << 1, 2, 3, 4;
	std::cout << X << std::endl;
	std::cout << "output above should be" << std::endl;
	std::cout << "1 2" << std::endl;
	std::cout << "3 4" << std::endl;
	return 0;
}
EOF
echo_eval g++ \
	$name.cpp \
	-I$HOME/cppad/trunk \
	-I$HOME/prefix/eigen/include \
	-g \
	-O0 \
	-std=c++11 \
	-o $name
echo_eval ./$name
