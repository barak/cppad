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
'base_adolc.hpp.xml'
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
var list_down0 = [
'mul_level_adolc.cpp.xml'
];
var list_current0 = [
'base_adolc.hpp.xml#Syntax',
'base_adolc.hpp.xml#Example',
'base_adolc.hpp.xml#Include Files',
'base_adolc.hpp.xml#CondExpOp',
'base_adolc.hpp.xml#CondExpRel',
'base_adolc.hpp.xml#EqualOpSeq',
'base_adolc.hpp.xml#Identical',
'base_adolc.hpp.xml#Integer',
'base_adolc.hpp.xml#azmul',
'base_adolc.hpp.xml#Ordered',
'base_adolc.hpp.xml#Unary Standard Math',
'base_adolc.hpp.xml#erf, asinh, acosh, atanh, expm1, log1p',
'base_adolc.hpp.xml#sign',
'base_adolc.hpp.xml#abs',
'base_adolc.hpp.xml#pow',
'base_adolc.hpp.xml#numeric_limits',
'base_adolc.hpp.xml#to_string',
'base_adolc.hpp.xml#hash_code'
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
