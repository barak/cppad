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
'installunix.xml'
];
var list_down2 = [
'install.xml',
'introduction.xml',
'ad.xml',
'adfun.xml',
'preprocessor.xml',
'multi_thread.xml',
'library.xml',
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
'installunix.xml'
];
var list_current0 = [
'installunix.xml#Deprecated',
'installunix.xml#Distribution Directory',
'installunix.xml#Work Directory',
'installunix.xml#Configure',
'installunix.xml#make',
'installunix.xml#make.Examples and Tests',
'installunix.xml#Profiling CppAD',
'installunix.xml#prefix_dir',
'installunix.xml#--with-Documentation',
'installunix.xml#--with-testvector',
'installunix.xml#--with-sparse_option',
'installunix.xml#--with-implicit_ctor',
'installunix.xml#max_num_threads',
'installunix.xml#cxx_flags',
'installunix.xml#openmp_flags',
'installunix.xml#postfix_dir',
'installunix.xml#adolc_dir',
'installunix.xml#adolc_dir.Linux',
'installunix.xml#adolc_dir.Cygwin',
'installunix.xml#boost_dir',
'installunix.xml#eigen_dir',
'installunix.xml#fadbad_dir',
'installunix.xml#ipopt_dir',
'installunix.xml#sacado_dir',
'installunix.xml#tape_addr_type',
'installunix.xml#tape_id_type',
'installunix.xml#make install'
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
