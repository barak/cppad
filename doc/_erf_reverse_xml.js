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
'theory.xml',
'reversetheory.xml',
'erf_reverse.xml'
];
var list_down3 = [
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
var list_down2 = [
'forwardtheory.xml',
'reversetheory.xml',
'reverse_identity.xml'
];
var list_down1 = [
'exp_reverse.xml',
'log_reverse.xml',
'sqrt_reverse.xml',
'sin_cos_reverse.xml',
'atan_reverse.xml',
'asin_reverse.xml',
'acos_reverse.xml',
'tan_reverse.xml',
'erf_reverse.xml'
];
var list_current0 = [
'erf_reverse.xml#Notation',
'erf_reverse.xml#Positive Orders Z(t)',
'erf_reverse.xml#Order Zero Z(t)'
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