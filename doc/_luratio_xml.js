var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'library.xml',
'luratio.xml'
];
var list_down2 = [
'install.xml',
'introduction.xml',
'ad.xml',
'adfun.xml',
'preprocessor.xml',
'multi_thread.xml',
'library.xml',
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
'benderquad.xml',
'opt_val_hes.xml',
'luratio.xml'
];
var list_down0 = [
'lu_ratio.cpp.xml'
];
var list_current0 = [
'luratio.xml#Syntax',
'luratio.xml#Description',
'luratio.xml#Include',
'luratio.xml#Matrix Storage',
'luratio.xml#sign',
'luratio.xml#ip',
'luratio.xml#jp',
'luratio.xml#LU',
'luratio.xml#LU.A',
'luratio.xml#LU.P',
'luratio.xml#LU.L',
'luratio.xml#LU.U',
'luratio.xml#LU.Factor',
'luratio.xml#LU.Determinant',
'luratio.xml#ratio',
'luratio.xml#ratio.Purpose',
'luratio.xml#SizeVector',
'luratio.xml#ADvector',
'luratio.xml#Example'
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
