#! /bin/bash -e
# $Id: search.sh 3212 2014-03-18 13:05:24Z bradbell $
# -----------------------------------------------------------------------------
# CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-14 Bradley M. Bell
#
# CppAD is distributed under multiple licenses. This distribution is under
# the terms of the
#                     GNU General Public License Version 3.
#
# A copy of this license is included in the COPYING file of this distribution.
# Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
# -----------------------------------------------------------------------------
if [ ! -e "bin/search.sh" ]
then
	echo "bin/search.sh: must be executed from its parent directory"
	exit 1
fi
if [ "$1" == "" ]
then
	echo 'usage: bin/search.sh pattern'
	echo '       Search for pattern in the cppad source code'
	exit 1
fi
pattern="$1"
dir_list='
	bin
	cppad 
	cppad_ipopt
	example 
	introduction
	multi_thread
	omh
	pkgconfig
	print_for
	speed
	test_more 
'
#
grep -l -r  "$pattern" $dir_list | \
	 sed -e '/\/makefile.in/d' -e '/test_one.exe/d'  -e '/\/new\//d'
grep -l "$pattern" makefile.am CMakeLists.txt doc.omh | \
	 sed -e '/\/makefile.in/d' -e '/test_one.exe/d'  -e '/\/new\//d'
