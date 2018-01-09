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
'sparsity_pattern.xml',
'subgraph_sparsity.xml'
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
'for_jac_sparsity.xml',
'forsparsejac.xml',
'rev_jac_sparsity.xml',
'revsparsejac.xml',
'rev_hes_sparsity.xml',
'revsparsehes.xml',
'for_hes_sparsity.xml',
'forsparsehes.xml',
'dependency.cpp.xml',
'rc_sparsity.cpp.xml',
'subgraph_sparsity.xml'
];
var list_down0 = [
'subgraph_sparsity.cpp.xml'
];
var list_current0 = [
'subgraph_sparsity.xml#Syntax',
'subgraph_sparsity.xml#Notation',
'subgraph_sparsity.xml#Method',
'subgraph_sparsity.xml#Atomic Function',
'subgraph_sparsity.xml#BoolVector',
'subgraph_sparsity.xml#SizeVector',
'subgraph_sparsity.xml#f',
'subgraph_sparsity.xml#select_domain',
'subgraph_sparsity.xml#select_range',
'subgraph_sparsity.xml#transpose',
'subgraph_sparsity.xml#pattern_out',
'subgraph_sparsity.xml#Example'
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
