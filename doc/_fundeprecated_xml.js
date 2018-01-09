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
'deprecated.xml',
'fundeprecated.xml'
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
var list_down1 = [
'include_deprecated.xml',
'fundeprecated.xml',
'comparechange.xml',
'omp_max_thread.xml',
'tracknewdel.xml',
'omp_alloc.xml',
'memory_leak.xml',
'epsilon.xml',
'test_vector.xml',
'cppad_ipopt_nlp.xml',
'old_atomic.xml',
'zdouble.xml',
'autotools.xml'
];
var list_current0 = [
'fundeprecated.xml#Syntax',
'fundeprecated.xml#Purpose',
'fundeprecated.xml#Dependent',
'fundeprecated.xml#Dependent.Deprecated 2007-08-07',
'fundeprecated.xml#Order',
'fundeprecated.xml#Order.Deprecated 2006-03-31',
'fundeprecated.xml#Memory',
'fundeprecated.xml#Memory.Deprecated 2006-03-31',
'fundeprecated.xml#Size',
'fundeprecated.xml#Size.Deprecated 2006-04-03',
'fundeprecated.xml#taylor_size',
'fundeprecated.xml#taylor_size.Deprecated 2006-06-17',
'fundeprecated.xml#use_VecAD',
'fundeprecated.xml#use_VecAD.Deprecated 2006-04-08',
'fundeprecated.xml#size_taylor',
'fundeprecated.xml#size_taylor.Deprecated 2014-03-18',
'fundeprecated.xml#capacity_taylor',
'fundeprecated.xml#capacity_taylor.Deprecated 2014-03-18'
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
