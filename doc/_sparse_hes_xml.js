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
'sparse_hes.xml'
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
'sparse_hes.cpp.xml'
];
var list_current0 = [
'sparse_hes.xml#Syntax',
'sparse_hes.xml#Purpose',
'sparse_hes.xml#SizeVector',
'sparse_hes.xml#BaseVector',
'sparse_hes.xml#f',
'sparse_hes.xml#x',
'sparse_hes.xml#w',
'sparse_hes.xml#subset',
'sparse_hes.xml#pattern',
'sparse_hes.xml#pattern.subset',
'sparse_hes.xml#coloring',
'sparse_hes.xml#coloring.cppad.symmetric',
'sparse_hes.xml#coloring.cppad.general',
'sparse_hes.xml#coloring.colpack.symmetric',
'sparse_hes.xml#coloring.colpack.general',
'sparse_hes.xml#coloring.colpack.star Deprecated 2017-06-01',
'sparse_hes.xml#work',
'sparse_hes.xml#n_sweep',
'sparse_hes.xml#Uses Forward',
'sparse_hes.xml#Example',
'sparse_hes.xml#Subset Hessian'
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
