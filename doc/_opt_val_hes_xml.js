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
'numeric_ad.xml',
'opt_val_hes.xml'
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
'faq.xml',
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
var list_down1 = [
'benderquad.xml',
'opt_val_hes.xml',
'luratio.xml'
];
var list_down0 = [
'opt_val_hes.cpp.xml'
];
var list_current0 = [
'opt_val_hes.xml#Syntax',
'opt_val_hes.xml#See Also',
'opt_val_hes.xml#Reference',
'opt_val_hes.xml#Purpose',
'opt_val_hes.xml#BaseVector',
'opt_val_hes.xml#x',
'opt_val_hes.xml#y',
'opt_val_hes.xml#Fun',
'opt_val_hes.xml#Fun.Fun::ad_vector',
'opt_val_hes.xml#Fun.fun.ell',
'opt_val_hes.xml#Fun.fun.s',
'opt_val_hes.xml#Fun.fun.sy',
'opt_val_hes.xml#jac',
'opt_val_hes.xml#hes',
'opt_val_hes.xml#signdet',
'opt_val_hes.xml#Example'
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
