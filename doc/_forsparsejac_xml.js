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
'forsparsejac.xml'
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
'for_sparse_jac.cpp.xml'
];
var list_current0 = [
'forsparsejac.xml#Syntax',
'forsparsejac.xml#Purpose',
'forsparsejac.xml#f',
'forsparsejac.xml#f.size_forward_bool',
'forsparsejac.xml#f.size_forward_set',
'forsparsejac.xml#x',
'forsparsejac.xml#q',
'forsparsejac.xml#transpose',
'forsparsejac.xml#dependency',
'forsparsejac.xml#r',
'forsparsejac.xml#r.transpose false',
'forsparsejac.xml#r.transpose true',
'forsparsejac.xml#s',
'forsparsejac.xml#s.transpose false',
'forsparsejac.xml#s.transpose true',
'forsparsejac.xml#VectorSet',
'forsparsejac.xml#Entire Sparsity Pattern',
'forsparsejac.xml#Example'
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
