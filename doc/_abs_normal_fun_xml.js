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
'abs_normal_fun.xml'
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
'abs_get_started.cpp.xml'
];
var list_current0 = [
'abs_normal_fun.xml#Syntax',
'abs_normal_fun.xml#f',
'abs_normal_fun.xml#f.n',
'abs_normal_fun.xml#f.m',
'abs_normal_fun.xml#f.s',
'abs_normal_fun.xml#a',
'abs_normal_fun.xml#a.zeta',
'abs_normal_fun.xml#a.a(x)',
'abs_normal_fun.xml#g',
'abs_normal_fun.xml#g.z(x, u)',
'abs_normal_fun.xml#g.y(x, u)',
'abs_normal_fun.xml#Affine Approximation',
'abs_normal_fun.xml#Abs-normal Approximation',
'abs_normal_fun.xml#Abs-normal Approximation.Approximating a(x)',
'abs_normal_fun.xml#Abs-normal Approximation.Approximating f(x)',
'abs_normal_fun.xml#Correspondence to Literature',
'abs_normal_fun.xml#Example'
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
