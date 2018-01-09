#! /bin/bash -e
# -----------------------------------------------------------------------------
# CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-17 Bradley M. Bell
#
# CppAD is distributed under multiple licenses. This distribution is under
# the terms of the
#                     GNU General Public License Version 3.
#
# A copy of this license is included in the COPYING file of this distribution.
# Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
# -----------------------------------------------------------------------------
if [ $0 != 'bin/version.sh' ]
then
	echo 'bin/version.sh: must be executed from its parent directory'
	exit 1
fi
if [ "$1" != 'get' ] \
&& [ "$1" != 'set' ] \
&& [ "$1" != 'date' ] \
&& [ "$1" != 'copy' ] \
&& [ "$1" != 'check' ]
then
	echo 'usage: bin/version.sh (get|set|date|copy|check) [version]'
	echo 'get:   Gets the current version number from CMakeLists.txt.'
	echo 'set:   Sets CMakeLists.txt version number to [version].'
	echo 'date:  Sets CMakeLists.txt version number to yyyymmdd.'
	echo 'copy:  Copy version number from ./CMakeLists.txt to other files.'
	echo 'check: Checks that version number has been copied.'
	exit 1
fi
echo_eval() {
     echo $*
     eval $*
}
# -----------------------------------------------------------------------------
if [ "$1" == 'set' ]
then
	version="$2"
fi
if [ "$1" == 'date' ]
then
	version=`date +%Y%m%d`
fi
if [ "$1" == 'set' ] || [ "$1" == 'date' ]
then
	sed  \
	-e "s/(\(cppad_version *\)\"[0-9.]\{8\}[0-9.]*\" *)/(\1\"$version\" )/"  \
		-i.old CMakeLists.txt
	if diff CMakeLists.txt.old CMakeLists.txt
	then
		echo 'No change in CMakeLists.txt'
	fi
	echo_eval rm CMakeLists.txt.old
	#
	echo 'version.sh set: OK'
	exit 0
fi
# -----------------------------------------------------------------------------
# get the current version number
version=`grep '^SET *( *cppad_version ' CMakeLists.txt | \
	sed -e 's|^SET *( *cppad_version *"\([0-9.]\{8\}[0-9.]*\)" *)|\1|'`
if ! (echo $version | grep '[0-9]\{8\}') > /dev/null
then
	echo 'version.sh: Cannot find verison number in CMakeLists.txt'
	exit 1
fi
if [ "$1" == 'get' ]
then
	echo "$version"
	exit 0
fi
# -----------------------------------------------------------------------------
# copy with version number same as in top level CMakeLists.txt
sed  \
	-e "s/(\[cppad\], *\[[0-9]\{8\}[.0-9]*\] *,/([cppad], [$version],/"  \
	< configure.ac > configure.ac.copy
#
sed \
	-e "s/cppad [0-9]\{8\}[.0-9]*/cppad $version/g" \
	-e "s/VERSION='[0-9]\{8\}[.0-9]*'/VERSION='$version'/g" \
	-e "s/configure [0-9]\{8\}[.0-9]*/configure $version/g" \
	-e "s/config.status [0-9]\{8\}[.0-9]*/config.status $version/g" \
	-e "s/\$as_me [0-9]\{8\}[.0-9]*/\$as_me $version/g" \
	-e "s/Generated by GNU Autoconf.*$version/&./" \
	< configure > configure.copy
chmod +x configure.copy
list='
	omh/install/autotools.omh
	doc.omh
'
for file in $list
do
	sed -e "s/cppad-[0-9]\{8\}\(\.[eg]pl\)/cppad-$version\1/" \
		-e "s/cppad-[0-9]\{8\}[0-9.]*\:/cppad-$version:/" \
		< $file > $file.copy
done
list="
	$list
	configure.ac
	configure
"
ok='yes'
for name in $list
do
	if ! diff $name $name.copy > /dev/null
	then
		echo '-------------------------------------------------------------'
		echo "diff $name"
		if diff $name $name.copy
		then
			echo 'version.sh: program error'
			exit 1
		else
			if [ "$1" == 'copy' ]
			then
				mv $name.copy $name
			fi
			if [ "$1" == 'check' ]
			then
				ok='no'
				rm $name.copy
			fi
		fi
	else
		rm $name.copy
	fi
done
if [ "$ok" != 'yes' ]
then
	echo 'version.sh check: Found differences.'
	exit 1
fi
# ----------------------------------------------------------------------------
echo "version.sh $1: OK"
exit 0
