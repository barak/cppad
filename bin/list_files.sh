#! /bin/bash -e
# $Id: list_files.sh 3770 2015-12-31 12:28:29Z bradbell $
# -----------------------------------------------------------------------------
# CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-15 Bradley M. Bell
#
# CppAD is distributed under multiple licenses. This distribution is under
# the terms of the
#                     GNU General Public License Version 3.
#
# A copy of this license is included in the COPYING file of this distribution.
# Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
# -----------------------------------------------------------------------------
# list files in repository (not deleted)
# -----------------------------------------------------------------------------
if [ $0 != "bin/list_files.sh" ]
then
	echo "bin/list_files.sh: must be executed from its parent directory"
	exit 1
fi
# -----------------------------------------------------------------------------
list=`git ls-files`
git ls-files -d > list_files.$$
for file in $list
do
	if ! grep "$file" list_files.$$ > /dev/null
	then
		echo $file
	fi
done
rm list_files.$$
# ----------------------------------------------------------------------------
exit 0
