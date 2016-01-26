var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'ipopt_solve.xml',
'ipopt_solve_ode_inverse.cpp.xml'
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
'ipopt_solve_get_started.cpp.xml',
'ipopt_solve_retape.cpp.xml',
'ipopt_solve_ode_inverse.cpp.xml'
];
var list_current0 = [
'ipopt_solve_ode_inverse.cpp.xml#Purpose',
'ipopt_solve_ode_inverse.cpp.xml#Forward Problem',
'ipopt_solve_ode_inverse.cpp.xml#Measurements',
'ipopt_solve_ode_inverse.cpp.xml#Measurements.Simulation Analytic Solution',
'ipopt_solve_ode_inverse.cpp.xml#Measurements.Simulation Parameter Values',
'ipopt_solve_ode_inverse.cpp.xml#Measurements.Simulated Measurement Values',
'ipopt_solve_ode_inverse.cpp.xml#Inverse Problem',
'ipopt_solve_ode_inverse.cpp.xml#Trapezoidal Approximation',
'ipopt_solve_ode_inverse.cpp.xml#Solution Method',
'ipopt_solve_ode_inverse.cpp.xml#Source'
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
