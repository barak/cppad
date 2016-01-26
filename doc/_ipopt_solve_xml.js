var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'ipopt_solve.xml'
];
var list_down1 = [
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
var list_down0 = [
'ipopt_solve_get_started.cpp.xml',
'ipopt_solve_retape.cpp.xml',
'ipopt_solve_ode_inverse.cpp.xml'
];
var list_current0 = [
'ipopt_solve.xml#Syntax',
'ipopt_solve.xml#Purpose',
'ipopt_solve.xml#Include File',
'ipopt_solve.xml#Bvector',
'ipopt_solve.xml#Dvector',
'ipopt_solve.xml#options',
'ipopt_solve.xml#options.Retape',
'ipopt_solve.xml#options.Sparse',
'ipopt_solve.xml#options.String',
'ipopt_solve.xml#options.Numeric',
'ipopt_solve.xml#options.Integer',
'ipopt_solve.xml#xi',
'ipopt_solve.xml#xl',
'ipopt_solve.xml#xu',
'ipopt_solve.xml#gl',
'ipopt_solve.xml#gu',
'ipopt_solve.xml#fg_eval',
'ipopt_solve.xml#fg_eval.ADvector',
'ipopt_solve.xml#fg_eval.x',
'ipopt_solve.xml#fg_eval.fg',
'ipopt_solve.xml#solution',
'ipopt_solve.xml#solution.status',
'ipopt_solve.xml#solution.x',
'ipopt_solve.xml#solution.zl',
'ipopt_solve.xml#solution.zu',
'ipopt_solve.xml#solution.g',
'ipopt_solve.xml#solution.lambda',
'ipopt_solve.xml#solution.obj_value',
'ipopt_solve.xml#Example',
'ipopt_solve.xml#Example.get_started',
'ipopt_solve.xml#Example.retape',
'ipopt_solve.xml#Example.ode_inverse'
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
