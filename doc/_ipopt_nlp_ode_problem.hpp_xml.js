var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'appendix.xml',
'deprecated.xml',
'cppad_ipopt_nlp.xml',
'ipopt_nlp_ode.xml',
'ipopt_nlp_ode_problem.xml',
'ipopt_nlp_ode_problem.hpp.xml'
];
var list_down3 = [
'ipopt_nlp_get_started.cpp.xml',
'ipopt_nlp_ode.xml',
'ipopt_ode_speed.cpp.xml'
];
var list_down2 = [
'ipopt_nlp_ode_problem.xml',
'ipopt_nlp_ode_simple.xml',
'ipopt_nlp_ode_fast.xml',
'ipopt_nlp_ode_run.hpp.xml',
'ipopt_nlp_ode_check.cpp.xml'
];
var list_down1 = [
'ipopt_nlp_ode_problem.hpp.xml'
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