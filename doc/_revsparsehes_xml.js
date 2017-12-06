var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'adfun.xml',
'funeval.xml',
'sparse.xml',
'revsparsehes.xml'
];
var list_down3 = [
'independent.xml',
'funconstruct.xml',
'dependent.xml',
'abort_recording.xml',
'seq_property.xml',
'funeval.xml',
'drivers.xml',
'funcheck.xml',
'optimize.xml',
'check_for_nan.xml'
];
var list_down2 = [
'forward.xml',
'reverse.xml',
'sparse.xml'
];
var list_down1 = [
'forsparsejac.xml',
'revsparsejac.xml',
'dependency.cpp.xml',
'revsparsehes.xml',
'forsparsehes.xml',
'bool_sparsity.cpp.xml'
];
var list_down0 = [
'rev_sparse_hes.cpp.xml',
'sparsity_sub.cpp.xml'
];
var list_current0 = [
'revsparsehes.xml#Syntax',
'revsparsehes.xml#Purpose',
'revsparsehes.xml#f',
'revsparsehes.xml#x',
'revsparsehes.xml#q',
'revsparsehes.xml#transpose',
'revsparsehes.xml#r',
'revsparsehes.xml#s',
'revsparsehes.xml#h',
'revsparsehes.xml#h.transpose false',
'revsparsehes.xml#h.transpose true',
'revsparsehes.xml#VectorSet',
'revsparsehes.xml#Entire Sparsity Pattern',
'revsparsehes.xml#Example'
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