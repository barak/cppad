var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'adfun.xml',
'abs_normal.xml',
'min_nso_linear.xml'
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
'record_adfun.xml',
'drivers.xml',
'forward.xml',
'reverse.xml',
'sparsity_pattern.xml',
'sparse_derivative.xml',
'optimize.xml',
'abs_normal.xml',
'funcheck.xml',
'check_for_nan.xml'
];
var list_down1 = [
'abs_normal_fun.xml',
'abs_print_mat.xml',
'abs_eval.xml',
'simplex_method.xml',
'lp_box.xml',
'abs_min_linear.xml',
'min_nso_linear.xml',
'qp_interior.xml',
'qp_box.xml',
'abs_min_quad.xml',
'min_nso_quad.xml'
];
var list_down0 = [
'min_nso_linear.cpp.xml',
'min_nso_linear.hpp.xml'
];
var list_current0 = [
'min_nso_linear.xml#Syntax',
'min_nso_linear.xml#Prototype',
'min_nso_linear.xml#Source',
'min_nso_linear.xml#Purpose',
'min_nso_linear.xml#DblVector',
'min_nso_linear.xml#SizeVector',
'min_nso_linear.xml#f',
'min_nso_linear.xml#f.n',
'min_nso_linear.xml#f.m',
'min_nso_linear.xml#f.s',
'min_nso_linear.xml#level',
'min_nso_linear.xml#g',
'min_nso_linear.xml#a',
'min_nso_linear.xml#epsilon',
'min_nso_linear.xml#maxitr',
'min_nso_linear.xml#b_in',
'min_nso_linear.xml#x_in',
'min_nso_linear.xml#x_out',
'min_nso_linear.xml#Example'
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
