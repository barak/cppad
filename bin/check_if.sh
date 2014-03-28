#! /bin/bash -e
# $Id: check_if.sh 3081 2014-01-07 15:16:00Z bradbell $
# -----------------------------------------------------------------------------
# CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-14 Bradley M. Bell
#
# CppAD is distributed under multiple licenses. This distribution is under
# the terms of the
#                     Eclipse Public License Version 1.0.
#
# A copy of this license is included in the COPYING file of this distribution.
# Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
# -----------------------------------------------------------------------------
if [  "$0" != 'bin/check_if.sh' ]
then
	echo "bin/check_if: must be executed from its parent directory"
	exit 1
fi
# -----------------------------------------------------------------------------
# CppAD uses preprocessor '# if 0' comment blocks for temporary changes
# that will to be removed before testing for check in.
echo "Checking for '# if 0' and '# if NDEBUG' commands in source code"
echo "-------------------------------------------------------" 
ok="yes"
for ext in .cpp .hpp
do
	dir_list=`find . -name "*$ext" | sed \
		-e '/junk\.[^.]*$/d' \
		-e '/\/build\//d' \
		-e '/\/new\//d' \
		-e 's|^\./||' \
		-e 's|/[^/]*$||' | sort -u`  
	for dir in $dir_list 
	do
		list=`ls $dir/*$ext`
		for file in $list
		do
			if grep '^# *if *0 *$' $file > /dev/null
			then
				# CppAD uses /* comment */ for all its block commnets
				echo "$file has an '# if 0' preprocessor command"
				ok="no"
			fi
			if grep '^# *if *NDEBUG *$' $file > /dev/null
			then
				# This should probably be # ifndef NDEBUG ?
				echo "$file has an '# if NDEBUG' preprocessor command"
				ok="no"
			fi
		done
	done
done
echo "-------------------------------------------------------" 
if [ "$ok" = "no" ]
then
	echo 'bin/check_if.sh: Error'
	exit 1
else
	echo 'bin/check_if.sh: OK'
	exit 0
fi
