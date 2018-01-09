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
'abs_min_quad.xml'
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
'abs_min_quad.cpp.xml',
'abs_min_quad.hpp.xml'
];
var list_current0 = [
'abs_min_quad.xml#Syntax',
'abs_min_quad.xml#Prototype',
'abs_min_quad.xml#Source',
'abs_min_quad.xml#Purpose',
'abs_min_quad.xml#DblVector',
'abs_min_quad.xml#SizeVector',
'abs_min_quad.xml#f',
'abs_min_quad.xml#level',
'abs_min_quad.xml#n',
'abs_min_quad.xml#m',
'abs_min_quad.xml#s',
'abs_min_quad.xml#g',
'abs_min_quad.xml#g_hat',
'abs_min_quad.xml#g_jac',
'abs_min_quad.xml#hessian',
'abs_min_quad.xml#bound',
'abs_min_quad.xml#epsilon',
'abs_min_quad.xml#maxitr',
'abs_min_quad.xml#delta_x',
'abs_min_quad.xml#Method',
'abs_min_quad.xml#Method.sigma',
'abs_min_quad.xml#Method.Cutting Planes',
'abs_min_quad.xml#Method.Iteration',
'abs_min_quad.xml#Example'
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
