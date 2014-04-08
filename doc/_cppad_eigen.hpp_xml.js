var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'example.xml',
'general.xml',
'cppad_eigen.hpp.xml'
];
var list_down3 = [
'install.xml',
'introduction.xml',
'ad.xml',
'adfun.xml',
'preprocessor.xml',
'multi_thread.xml',
'library.xml',
'ipopt_solve.xml',
'example.xml',
'speed.xml',
'appendix.xml'
];
var list_down2 = [
'general.xml',
'exampleutility.xml',
'listallexamples.xml',
'testvector.xml'
];
var list_down1 = [
'ad_fun.cpp.xml',
'ad_in_c.cpp.xml',
'conj_grad.cpp.xml',
'cppad_eigen.hpp.xml',
'hes_minor_det.cpp.xml',
'hes_lu_det.cpp.xml',
'interface2c.cpp.xml',
'jac_minor_det.cpp.xml',
'jac_lu_det.cpp.xml',
'mul_level.xml',
'ode_stiff.cpp.xml',
'mul_level_ode.cpp.xml',
'mul_level_adolc_ode.cpp.xml',
'ode_taylor.cpp.xml',
'stack_machine.cpp.xml'
];
var list_down0 = [
'eigen_plugin.hpp.xml',
'eigen_array.cpp.xml',
'eigen_det.cpp.xml'
];
var list_current0 = [
'cppad_eigen.hpp.xml#Syntax',
'cppad_eigen.hpp.xml#Purpose',
'cppad_eigen.hpp.xml#Example',
'cppad_eigen.hpp.xml#eigen_plugin.hpp',
'cppad_eigen.hpp.xml#Include Files',
'cppad_eigen.hpp.xml#Eigen NumTraits',
'cppad_eigen.hpp.xml#CppAD Namespace'
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
