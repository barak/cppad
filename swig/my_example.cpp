// $Id$
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-16 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the
                    Eclipse Public License Version 1.0.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */
# include "my_example.h"

int my_fact(int n) {
	if (n <= 1) return 1;
	else return n * my_fact(n - 1);
}

int my_mod(int x, int y) {
	return (x % y);
}

const char* my_message()
{	return "OK";
}

void my_add(int x, int y, int* result)
{	*result = x + y;
}

int my_max(int n, int* x)
{	int result = x[0];
	for(int i = 1; i < 10; i++)
		if( x[i] > result )
			result = x[i];
	return result;
}
