/* $Id: speed_test.cpp 3094 2014-02-15 22:51:31Z bradbell $ */
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-14 Bradley M. Bell

CppAD is distributed under multiple licenses. This distribution is under
the terms of the 
                    Eclipse Public License Version 1.0.

A copy of this license is included in the COPYING file of this distribution.
Please visit http://www.coin-or.org/CppAD/ for information on other licenses.
-------------------------------------------------------------------------- */
/*
$begin speed_test.cpp$$
$spell
	cppad.hpp
	Microsoft
	namespace
	std
	const
	cout
	ctime
	ifdef
	const
	endif
	cpp
$$

$index speed_test, example$$
$index example, speed_test$$
$index test, speed$$

$section speed_test: Example and test$$

$code
$verbatim%speed/example/speed_test.cpp%0%// BEGIN C++%// END C++%1%$$
$$

$end
*/
// BEGIN C++
# include <cppad/speed_test.hpp>
# include <vector>

namespace { // empty namespace
	void test(size_t size, size_t repeat)
	{	// setup
		double *a = new double[size];
		double *b = new double[size];
		double *c = new double[size];
		size_t i  = size;;
		while(i)
		{	--i;
			a[i] = i;
			b[i] = 2 * i;
		}
		// operations we are timing
		while(repeat--)
		{	i = size;;
			while(i)
			{	--i;
				c[i] = a[i] * b[i];
			}
		}
		// teardown
		delete [] a;
		delete [] b;
		delete [] c;
		return;
	}
}
bool speed_test(void)
{	bool ok = true;

	// size of the test cases
	std::vector<size_t> size_vec(2);
	size_vec[0] = 40;
	size_vec[1] = 80;

	// minimum amount of time to run test
	double time_min = 0.5;

	// run the test cases
	std::vector<size_t> rate_vec(2);
	rate_vec = CppAD::speed_test(test, size_vec, time_min);

	// time per repeat loop (note counting setup or teardown)
	double time_0 = 1. / double(rate_vec[0]);
	double time_1 = 1. / double(rate_vec[1]);

	// for this case, time should be linear w.r.t size
	double check    = double(size_vec[1]) * time_0 / double(size_vec[0]);
	double rel_diff = (check - time_1) / time_1;
	ok             &= (std::fabs(rel_diff) <= .1);
	if( ! ok )
		std::cout << std::endl << "rel_diff = " << rel_diff << std::endl;
 
	return ok;
}
// END C++
