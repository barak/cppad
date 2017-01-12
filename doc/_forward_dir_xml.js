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
'forward.xml',
'forward_dir.xml'
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
'forward_zero.xml',
'forward_one.xml',
'forward_two.xml',
'forward_order.xml',
'forward_dir.xml',
'size_order.xml',
'compare_change.xml',
'capacity_order.xml',
'number_skip.xml'
];
var list_down0 = [
'forward_dir.cpp.xml'
];
var list_current0 = [
'forward_dir.xml#Syntax',
'forward_dir.xml#Purpose',
'forward_dir.xml#Reverse Mode',
'forward_dir.xml#Notation',
'forward_dir.xml#Notation.n',
'forward_dir.xml#Notation.m',
'forward_dir.xml#f',
'forward_dir.xml#q',
'forward_dir.xml#r',
'forward_dir.xml#xq',
'forward_dir.xml#Zero Order',
'forward_dir.xml#Non-Zero Lower Orders',
'forward_dir.xml#X(t)',
'forward_dir.xml#Y(t)',
'forward_dir.xml#yq',
'forward_dir.xml#Vector',
'forward_dir.xml#Example'
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
