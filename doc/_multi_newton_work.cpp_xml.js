var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'multi_thread.xml',
'thread_test.cpp.xml',
'multi_newton.cpp.xml',
'multi_newton_work.cpp.xml'
];
var list_down3 = [
'parallel_ad.xml',
'thread_test.cpp.xml'
];
var list_down2 = [
'a11c_openmp.cpp.xml',
'a11c_bthread.cpp.xml',
'a11c_pthread.cpp.xml',
'simple_ad_openmp.cpp.xml',
'simple_ad_bthread.cpp.xml',
'simple_ad_pthread.cpp.xml',
'team_example.cpp.xml',
'harmonic.cpp.xml',
'multi_newton.cpp.xml',
'team_thread.hpp.xml'
];
var list_down1 = [
'multi_newton_time.cpp.xml',
'multi_newton_work.cpp.xml'
];
var list_current0 = [
'multi_newton_work.cpp.xml#Syntax',
'multi_newton_work.cpp.xml#Purpose',
'multi_newton_work.cpp.xml#multi_newton_setup',
'multi_newton_work.cpp.xml#multi_newton_setup.fun',
'multi_newton_work.cpp.xml#multi_newton_setup.num_sub',
'multi_newton_work.cpp.xml#xlow',
'multi_newton_work.cpp.xml#xlow.xup',
'multi_newton_work.cpp.xml#xlow.epsilon',
'multi_newton_work.cpp.xml#max_itr',
'multi_newton_work.cpp.xml#max_itr.num_threads',
'multi_newton_work.cpp.xml#multi_newton_worker',
'multi_newton_work.cpp.xml#multi_newton_combine',
'multi_newton_work.cpp.xml#multi_newton_combine.xout',
'multi_newton_work.cpp.xml#Source'
];
function choose_across0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_across0[index-1];
}
function choose_up0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_up0[index-1];
}
function choose_down3(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down3[index-1];
}
function choose_down2(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down2[index-1];
}
function choose_down1(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down1[index-1];
}
function choose_down0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down0[index-1];
}
function choose_current0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_current0[index-1];
}
