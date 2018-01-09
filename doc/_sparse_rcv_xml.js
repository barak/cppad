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
'sparse_rcv.xml'
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
'test_boolofvoid.xml',
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
'set_union.xml',
'sparse_rc.xml',
'sparse_rcv.xml'
];
var list_down0 = [
'sparse_rcv.cpp.xml'
];
var list_current0 = [
'sparse_rcv.xml#Syntax',
'sparse_rcv.xml#SizeVector',
'sparse_rcv.xml#ValueVector',
'sparse_rcv.xml#empty',
'sparse_rcv.xml#pattern',
'sparse_rcv.xml#matrix',
'sparse_rcv.xml#target',
'sparse_rcv.xml#nr',
'sparse_rcv.xml#nc',
'sparse_rcv.xml#nnz',
'sparse_rcv.xml#set',
'sparse_rcv.xml#set.k',
'sparse_rcv.xml#set.v',
'sparse_rcv.xml#row',
'sparse_rcv.xml#col',
'sparse_rcv.xml#val',
'sparse_rcv.xml#row_major',
'sparse_rcv.xml#col_major',
'sparse_rcv.xml#Example'
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
