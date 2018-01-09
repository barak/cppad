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
'autotools.xml'
];
var list_down3 = [
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
var list_down2 = [
'faq.xml',
'directory.xml',
'theory.xml',
'glossary.xml',
'bib.xml',
'wish_list.xml',
'whats_new.xml',
'deprecated.xml',
'compare_c.xml',
'numeric_ad.xml',
'addon.xml',
'license.xml'
];
var list_down1 = [
'include_deprecated.xml',
'fundeprecated.xml',
'comparechange.xml',
'omp_max_thread.xml',
'tracknewdel.xml',
'omp_alloc.xml',
'memory_leak.xml',
'epsilon.xml',
'test_vector.xml',
'cppad_ipopt_nlp.xml',
'old_atomic.xml',
'zdouble.xml',
'autotools.xml'
];
var list_current0 = [
'autotools.xml#Deprecated 2012-12-26',
'autotools.xml#Distribution Directory',
'autotools.xml#Build Directory',
'autotools.xml#Configure',
'autotools.xml#make',
'autotools.xml#make.Examples and Tests',
'autotools.xml#Profiling CppAD',
'autotools.xml#prefix_dir',
'autotools.xml#--with-Documentation',
'autotools.xml#--with-testvector',
'autotools.xml#max_num_threads',
'autotools.xml#cxx_flags',
'autotools.xml#openmp_flags',
'autotools.xml#postfix_dir',
'autotools.xml#adolc_dir',
'autotools.xml#adolc_dir.Linux',
'autotools.xml#adolc_dir.Cygwin',
'autotools.xml#boost_dir',
'autotools.xml#eigen_dir',
'autotools.xml#fadbad_dir',
'autotools.xml#ipopt_dir',
'autotools.xml#sacado_dir',
'autotools.xml#tape_addr_type',
'autotools.xml#tape_id_type',
'autotools.xml#make install'
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
