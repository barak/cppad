var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'install.xml',
'cmake.xml',
'colpack_prefix.xml',
'colpack_hessian.cpp.xml'
];
var list_down3 = [
'download.xml',
'cmake.xml',
'cmake_check.xml',
'pkgconfig.xml'
];
var list_down2 = [
'adolc_prefix.xml',
'colpack_prefix.xml',
'eigen_prefix.xml',
'fadbad_prefix.xml',
'ipopt_prefix.xml',
'sacado_prefix.xml',
'cppad_testvector.xml'
];
var list_down1 = [
'colpack_jac.cpp.xml',
'colpack_jacobian.cpp.xml',
'colpack_hes.cpp.xml',
'colpack_hessian.cpp.xml',
'get_colpack.sh.xml'
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
