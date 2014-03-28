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
'forwardany.xml'
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
'forwardzero.xml',
'forwardone.xml',
'forwardany.xml',
'size_taylor.xml',
'comparechange.xml',
'capacity_taylor.xml',
'number_skip.xml',
'forward.cpp.xml',
'forward_mul.cpp.xml'
];
var list_current0 = [
'forwardany.xml#Syntax',
'forwardany.xml#Purpose',
'forwardany.xml#Purpose.Function Values',
'forwardany.xml#Purpose.Derivative Values',
'forwardany.xml#X(t)',
'forwardany.xml#Y(t)',
'forwardany.xml#f',
'forwardany.xml#p',
'forwardany.xml#x_p',
'forwardany.xml#x_p.Restrictions',
'forwardany.xml#x_p.One Order',
'forwardany.xml#x_p.Multiple Orders',
'forwardany.xml#s',
'forwardany.xml#y_p',
'forwardany.xml#y_p.One Order',
'forwardany.xml#y_p.Multiple Orders',
'forwardany.xml#Vector',
'forwardany.xml#Zero Order',
'forwardany.xml#First Order',
'forwardany.xml#Second Order',
'forwardany.xml#Example'
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
