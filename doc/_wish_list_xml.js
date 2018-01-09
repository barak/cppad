var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'appendix.xml',
'wish_list.xml'
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
'faq.xml',
'directory.xml',
'theory.xml',
'glossary.xml',
'bib.xml',
'wish_list.xml',
'whats_new.xml',
'deprecated.xml',
'compare_c.xml',
'numeric_ad.xml',
'addon.xml',
'license.xml'
];
var list_current0 = [
'wish_list.xml#Multi-Threading',
'wish_list.xml#Atomic',
'wish_list.xml#Atomic.Subgraph',
'wish_list.xml#Atomic.New API',
'wish_list.xml#Atomic.Sparsity',
'wish_list.xml#Atomic.Element-wise Operations',
'wish_list.xml#check_finite',
'wish_list.xml#test_boolofvoid',
'wish_list.xml#Eigen',
'wish_list.xml#Example',
'wish_list.xml#Optimization',
'wish_list.xml#Optimization.Taping',
'wish_list.xml#Optimization.Special Operators',
'wish_list.xml#Optimization.Memory',
'wish_list.xml#checkpoint',
'wish_list.xml#checkpoint.Retape',
'wish_list.xml#checkpoint.Testing',
'wish_list.xml#Compilation Speed',
'wish_list.xml#Base Requirements',
'wish_list.xml#Adolc',
'wish_list.xml#Forward Mode Recomputation',
'wish_list.xml#Iterator Interface',
'wish_list.xml#Operation Sequence',
'wish_list.xml#Software Guidelines',
'wish_list.xml#Tracing',
'wish_list.xml#atan2',
'wish_list.xml#BenderQuad'
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
