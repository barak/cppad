var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'utility.xml',
'odegear.xml'
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
'errorhandler.xml',
'nearequal.xml',
'speed_test.xml',
'speedtest.xml',
'time_test.xml',
'numerictype.xml',
'checknumerictype.xml',
'simplevector.xml',
'checksimplevector.xml',
'nan.xml',
'pow_int.xml',
'poly.xml',
'ludetandsolve.xml',
'rombergone.xml',
'rombergmul.xml',
'runge45.xml',
'rosen34.xml',
'odeerrcontrol.xml',
'odegear.xml',
'odegearcontrol.xml',
'cppad_vector.xml',
'thread_alloc.xml',
'index_sort.xml',
'to_string.xml',
'set_union.xml'
];
var list_down0 = [
'ode_gear.cpp.xml'
];
var list_current0 = [
'odegear.xml#Syntax',
'odegear.xml#Purpose',
'odegear.xml#Include',
'odegear.xml#Fun',
'odegear.xml#Fun.t',
'odegear.xml#Fun.x',
'odegear.xml#Fun.f',
'odegear.xml#Fun.f_x',
'odegear.xml#Fun.Warning',
'odegear.xml#m',
'odegear.xml#n',
'odegear.xml#T',
'odegear.xml#X',
'odegear.xml#e',
'odegear.xml#Scalar',
'odegear.xml#Vector',
'odegear.xml#Example',
'odegear.xml#Source Code',
'odegear.xml#Theory',
'odegear.xml#Gear\'s Method'
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