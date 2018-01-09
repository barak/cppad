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
'sparse_derivative.xml',
'sparse_jac.xml'
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
'sparse_jac.xml',
'sparse_jacobian.xml',
'sparse_hes.xml',
'sparse_hessian.xml',
'subgraph_jac_rev.xml'
];
var list_down0 = [
'sparse_jac_for.cpp.xml',
'sparse_jac_rev.cpp.xml'
];
var list_current0 = [
'sparse_jac.xml#Syntax',
'sparse_jac.xml#Purpose',
'sparse_jac.xml#SizeVector',
'sparse_jac.xml#BaseVector',
'sparse_jac.xml#sparse_jac_for',
'sparse_jac.xml#sparse_jac_rev',
'sparse_jac.xml#f',
'sparse_jac.xml#group_max',
'sparse_jac.xml#x',
'sparse_jac.xml#subset',
'sparse_jac.xml#pattern',
'sparse_jac.xml#coloring',
'sparse_jac.xml#coloring.cppad',
'sparse_jac.xml#coloring.colpack',
'sparse_jac.xml#work',
'sparse_jac.xml#n_sweep',
'sparse_jac.xml#Uses Forward',
'sparse_jac.xml#Example'
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
