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
'advalued.xml',
'unary_standard_math.xml',
'atanh.xml'
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
'arithmetic.xml',
'unary_standard_math.xml',
'binary_math.xml',
'condexp.xml',
'discrete.xml',
'numeric_limits.xml',
'atomic.xml'
];
var list_down1 = [
'acos.xml',
'asin.xml',
'atan.xml',
'cos.xml',
'cosh.xml',
'exp.xml',
'log.xml',
'log10.xml',
'sin.xml',
'sinh.xml',
'sqrt.xml',
'tan.xml',
'tanh.xml',
'abs.xml',
'acosh.xml',
'asinh.xml',
'atanh.xml',
'erf.xml',
'expm1.xml',
'log1p.xml',
'sign.xml'
];
var list_down0 = [
'atanh.cpp.xml'
];
var list_current0 = [
'atanh.xml#Syntax',
'atanh.xml#Description',
'atanh.xml#x, y',
'atanh.xml#CPPAD_USE_CPLUSPLUS_2011',
'atanh.xml#CPPAD_USE_CPLUSPLUS_2011.true',
'atanh.xml#CPPAD_USE_CPLUSPLUS_2011.false',
'atanh.xml#Example'
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