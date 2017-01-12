var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'ad.xml',
'base_require.xml',
'base_example.xml',
'base_float.hpp.xml'
];
var list_down3 = [
'ad_ctor.xml',
'ad_assign.xml',
'convert.xml',
'advalued.xml',
'boolvalued.xml',
'vecad.xml',
'base_require.xml'
];
var list_down2 = [
'base_member.xml',
'base_cond_exp.xml',
'base_identical.xml',
'base_ordered.xml',
'base_std_math.xml',
'base_limits.xml',
'base_to_string.xml',
'base_hash.xml',
'base_example.xml'
];
var list_down1 = [
'base_alloc.hpp.xml',
'base_require.cpp.xml',
'base_adolc.hpp.xml',
'base_float.hpp.xml',
'base_double.hpp.xml',
'base_complex.hpp.xml'
];
var list_current0 = [
'base_float.hpp.xml#CondExpOp',
'base_float.hpp.xml#CondExpRel',
'base_float.hpp.xml#EqualOpSeq',
'base_float.hpp.xml#Identical',
'base_float.hpp.xml#Integer',
'base_float.hpp.xml#azmul',
'base_float.hpp.xml#Ordered',
'base_float.hpp.xml#Unary Standard Math',
'base_float.hpp.xml#sign',
'base_float.hpp.xml#pow',
'base_float.hpp.xml#numeric_limits',
'base_float.hpp.xml#to_string'
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
