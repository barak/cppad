/* $Id: speed.cpp 2506 2012-10-24 19:36:49Z bradbell $ */
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-11 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    GNU General Public License Version 3.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */

# include <cstdio>  // system include files used for I/O
# include <string>  // std::string

// external complied tests
extern double ode_speed(const char* name, size_t& count);

// main program that runs all the cppad_ipopt speed tests
int main(void)
{	using std::printf;
	const char* name;
	double      seconds;
	size_t      count;

	name    = "simple_retape_yes";
	seconds = ode_speed(name, count);
	printf("ode %20s: seconds = %5.2f: eval_r_count = %d\n", 
		name, seconds, int(count) );

	name    = "simple_retape_no";
	seconds = ode_speed(name, count);
	printf("ode %20s: seconds = %5.2f: eval_r_count = %d\n",
		name, seconds, int(count) );

	name    = "fast_retape_yes";
	seconds = ode_speed(name, count);
	printf("ode %20s: seconds = %5.2f: eval_r_count = %d\n",
		name, seconds, int(count) );

	name    = "fast_retape_no";
	seconds = ode_speed(name, count);
	printf("ode %20s: seconds = %5.2f: eval_r_count = %d\n",
		name, seconds, int(count) );
	
	return 0;
}
