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
'cppad_vector.xml'
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
'cppad_vector.cpp.xml',
'vector_bool.cpp.xml'
];
var list_current0 = [
'cppad_vector.xml#Syntax',
'cppad_vector.xml#Description',
'cppad_vector.xml#Include',
'cppad_vector.xml#capacity',
'cppad_vector.xml#Assignment',
'cppad_vector.xml#Assignment.Check Size',
'cppad_vector.xml#Assignment.Return Reference',
'cppad_vector.xml#Element Access',
'cppad_vector.xml#push_back',
'cppad_vector.xml#push_vector',
'cppad_vector.xml#Output',
'cppad_vector.xml#resize',
'cppad_vector.xml#clear',
'cppad_vector.xml#data',
'cppad_vector.xml#vectorBool',
'cppad_vector.xml#vectorBool.Memory',
'cppad_vector.xml#vectorBool.data',
'cppad_vector.xml#vectorBool.Output',
'cppad_vector.xml#vectorBool.Element Type',
'cppad_vector.xml#Memory and Parallel Mode',
'cppad_vector.xml#Example',
'cppad_vector.xml#Exercise'
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
