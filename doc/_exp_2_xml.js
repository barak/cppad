var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'introduction.xml',
'exp_2.xml'
];
var list_down2 = [
'install.xml',
'introduction.xml',
'ad.xml',
'adfun.xml',
'preprocessor.xml',
'multi_thread.xml',
'utility.xml',
'ipopt_solve.xml',
'example.xml',
'speed.xml',
'appendix.xml'
];
var list_down1 = [
'get_started.cpp.xml',
'exp_2.xml',
'exp_eps.xml',
'exp_apx_main.cpp.xml'
];
var list_down0 = [
'exp_2.hpp.xml',
'exp_2.cpp.xml',
'exp_2_for0.xml',
'exp_2_for1.xml',
'exp_2_rev1.xml',
'exp_2_for2.xml',
'exp_2_rev2.xml',
'exp_2_cppad.xml'
];
var list_current0 = [
'exp_2.xml#Syntax',
'exp_2.xml#Purpose',
'exp_2.xml#Mathematical Form',
'exp_2.xml#include',
'exp_2.xml#x',
'exp_2.xml#y',
'exp_2.xml#Type',
'exp_2.xml#Contents',
'exp_2.xml#Implementation',
'exp_2.xml#Test',
'exp_2.xml#Exercises'
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
