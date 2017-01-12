var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'install.xml',
'auto_tools.xml'
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
'download.xml',
'cmake.xml',
'cmake_check.xml',
'pkgconfig.xml',
'auto_tools.xml'
];
var list_current0 = [
'auto_tools.xml#Deprecated 2012-12-26',
'auto_tools.xml#Distribution Directory',
'auto_tools.xml#Work Directory',
'auto_tools.xml#Configure',
'auto_tools.xml#make',
'auto_tools.xml#make.Examples and Tests',
'auto_tools.xml#Profiling CppAD',
'auto_tools.xml#prefix_dir',
'auto_tools.xml#--with-Documentation',
'auto_tools.xml#--with-testvector',
'auto_tools.xml#--with-deprecated',
'auto_tools.xml#max_num_threads',
'auto_tools.xml#cxx_flags',
'auto_tools.xml#openmp_flags',
'auto_tools.xml#postfix_dir',
'auto_tools.xml#adolc_dir',
'auto_tools.xml#adolc_dir.Linux',
'auto_tools.xml#adolc_dir.Cygwin',
'auto_tools.xml#boost_dir',
'auto_tools.xml#eigen_dir',
'auto_tools.xml#fadbad_dir',
'auto_tools.xml#ipopt_dir',
'auto_tools.xml#sacado_dir',
'auto_tools.xml#tape_addr_type',
'auto_tools.xml#tape_id_type',
'auto_tools.xml#make install'
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
