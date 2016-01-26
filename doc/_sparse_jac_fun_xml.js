var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'speed.xml',
'speed_utility.xml',
'sparse_jac_fun.xml'
];
var list_down3 = [
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
var list_down2 = [
'speed_main.xml',
'speed_utility.xml',
'speed_double.xml',
'speed_adolc.xml',
'speed_cppad.xml',
'speed_fadbad.xml',
'speed_sacado.xml'
];
var list_down1 = [
'det_by_lu.xml',
'det_of_minor.xml',
'det_by_minor.xml',
'det_33.xml',
'det_grad_33.xml',
'mat_sum_sq.xml',
'ode_evaluate.xml',
'sparse_jac_fun.xml',
'sparse_hes_fun.xml',
'uniform_01.xml'
];
var list_down0 = [
'sparse_jac_fun.cpp.xml',
'sparse_jac_fun.hpp.xml'
];
var list_current0 = [
'sparse_jac_fun.xml#Syntax',
'sparse_jac_fun.xml#Purpose',
'sparse_jac_fun.xml#Inclusion',
'sparse_jac_fun.xml#Float',
'sparse_jac_fun.xml#FloatVector',
'sparse_jac_fun.xml#n',
'sparse_jac_fun.xml#m',
'sparse_jac_fun.xml#x',
'sparse_jac_fun.xml#row',
'sparse_jac_fun.xml#col',
'sparse_jac_fun.xml#p',
'sparse_jac_fun.xml#fp',
'sparse_jac_fun.xml#fp.Function',
'sparse_jac_fun.xml#fp.Jacobian',
'sparse_jac_fun.xml#Example',
'sparse_jac_fun.xml#Source Code'
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
