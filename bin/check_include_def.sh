#! /bin/bash -e
# SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-or-later
# SPDX-FileCopyrightText: Bradley M. Bell <bradbell@seanet.com>
# SPDX-FileContributor: 2003-22 Bradley M. Bell
# ----------------------------------------------------------------------------
if [ ! -e "bin/check_include_def.sh" ]
then
   echo "bin/check_include_def.sh: must be executed from its parent directory"
   exit 1
fi
# ---------------------------------------------------------------------------
echo "Differences between include file names and ifndef at top directives."
echo "Also make sure same ifndef not used by two different files."
echo "-------------------------------------------------------------------"
list=`git ls-files | sed -n -e '/\.hpp$/p'`
different='no'
for file_name in $list
do
   dir=`echo $file_name | sed -e 's|/[^/]*$||'`
   name=`echo $file_name | sed -e 's|^.*/||'`
   first_dir=`echo $dir | sed -e 's|/.*||'`
   #
   macro_name=`sed -n -e '/^# *ifndef *CPPAD_[0-9A-Z_]*_HPP$/p' $file_name | \
      sed -e 's|^# *ifndef *||'`
   check=`echo $file_name | tr [a-zA-Z/.] [A-Za-z__]`
   #
   if [ "$first_dir" == 'include' ]
   then
      check=`echo $check | sed -e 's|INCLUDE_||'`
   else
      check="CPPAD_$check"
   fi
   #
   if [ "$macro_name" == '' ]
   then
      echo "file_name=$file_name"
      echo 'Cannot find  ^# *ifndef *CPPAD_[0-9A-Z_]*_HPP'
      different='yes'
   elif [ "$macro_name" != "$check" ]
   then
      echo " file_name=$file_name"
      echo "macro_name=$macro_name"
      different='yes'
   fi
done
#
echo "-------------------------------------------------------------------"
if [ $different = 'yes' ]
then
   echo "Error: nothing should be between the two dashed lines above"
   exit 1
else
   echo "Ok: nothing is between the two dashed lines above"
   exit 0
fi
