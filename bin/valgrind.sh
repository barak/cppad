#! /bin/bash -eu
# SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
# SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
# SPDX-FileContributor: 2003-22 Bradley M. Bell
# ----------------------------------------------------------------------------
# bash function that echos and executes a command
echo_eval() {
   echo $*
   eval $*
}
# -----------------------------------------------------------------------------
if [ "$0" != "bin/valgrind.sh" ]
then
   echo "bin/valgrind.sh: must be executed from its parent directory"
   exit 1
fi
if [ "$#" != '0' ]
then
   echo 'usage: bin/valgrind.sh.sh'
   exit 1
fi
# -----------------------------------------------------------------------------
list=`find build -perm -700 -type f | \
   sed -e '/^build\/cppad-*/d'  -e '/\/CMakeFiles\//d'`
for program in $list
do
   arguments=''
   if echo "$program" | grep '\/speed\/' > /dev/null
   then
      arguments='correct none'
   fi
   echo "valgrind $program $arguments 2> valgrind.log"
   valgrind $program $arguments 2> valgrind.log
   if ! grep '^==[0-9]*== ERROR SUMMARY: 0' valgrind.log
   then
      grep 'ERROR SUMMARY' valgrind.log
      exit 1
   fi
   if ! grep '^==[0-9]*== *definitely lost: 0' valgrind.log
   then
      if grep '^==[0-9]*== *definitely lost:' valgrind.log
      then
         exit 1
      fi
   fi
   if ! grep '^==[0-9]*== *indirectly lost: 0' valgrind.log
   then
      if grep '^==[0-9]*== *indirectly lost:' valgrind.log
      then
         exit 1
      fi
   fi
   if ! grep '^==[0-9]*== *possibly lost: 0' valgrind.log
   then
      if grep '^==[0-9]*== *possibly lost:' valgrind.log
      then
         exit 1
      fi
   fi
   if ! grep '^==[0-9]*== *suppressed: 0' valgrind.log
   then
      if grep '^==[0-9]*== *suppressed:' valgrind.log
      then
         exit 1
      fi
   fi
done
# -----------------------------------------------------------------------------
echo 'bin/valgrind.sh: OK'
exit 0
