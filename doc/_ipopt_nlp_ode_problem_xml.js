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
'ipopt_nlp_ode_problem.xml'
];
var list_down3 = [
'include_deprecated.xml',
'fundeprecated.xml',
'omp_max_thread.xml',
'tracknewdel.xml',
'omp_alloc.xml',
'memory_leak.xml',
'epsilon.xml',
'test_vector.xml',
'cppad_ipopt_nlp.xml',
'old_atomic.xml'
];
var list_down2 = [
'ipopt_nlp_get_started.cpp.xml',
'ipopt_nlp_ode.xml',
'ipopt_ode_speed.cpp.xml'
];
var list_down1 = [
'ipopt_nlp_ode_problem.xml',
'ipopt_nlp_ode_simple.xml',
'ipopt_nlp_ode_fast.xml',
'ipopt_nlp_ode_run.hpp.xml',
'ipopt_nlp_ode_check.cpp.xml'
];
var list_down0 = [
'ipopt_nlp_ode_problem.hpp.xml'
];
var list_current0 = [
'ipopt_nlp_ode_problem.xml#Notation',
'ipopt_nlp_ode_problem.xml#Forward Problem',
'ipopt_nlp_ode_problem.xml#Measurements',
'ipopt_nlp_ode_problem.xml#Measurements.Simulation Analytic Solution',
'ipopt_nlp_ode_problem.xml#Measurements.Simulation Parameter Values',
'ipopt_nlp_ode_problem.xml#Measurements.Simulated Measurement Values',
'ipopt_nlp_ode_problem.xml#Inverse Problem',
'ipopt_nlp_ode_problem.xml#Trapezoidal Approximation',
'ipopt_nlp_ode_problem.xml#Trapezoidal Approximation.Trapezoidal Time Grid',
'ipopt_nlp_ode_problem.xml#Black Box Method',
'ipopt_nlp_ode_problem.xml#Black Box Method.Two levels of Iteration',
'ipopt_nlp_ode_problem.xml#Black Box Method.Derivatives',
'ipopt_nlp_ode_problem.xml#Simultaneous Method',
'ipopt_nlp_ode_problem.xml#Source'
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
