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
'whats_new.xml'
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
var list_down0 = [
'whats_new_16.xml',
'whats_new_15.xml',
'whats_new_14.xml',
'whats_new_13.xml',
'whats_new_12.xml',
'whats_new_11.xml',
'whats_new_10.xml',
'whats_new_09.xml',
'whats_new_08.xml',
'whats_new_07.xml',
'whats_new_06.xml',
'whats_new_05.xml',
'whats_new_04.xml',
'whats_new_03.xml'
];
var list_current0 = [
'whats_new.xml#Introduction',
'whats_new.xml#This Year',
'whats_new.xml#Previous Years'
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