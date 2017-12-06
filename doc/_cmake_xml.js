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
'cmake.xml'
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
var list_down0 = [
'adolc_prefix.xml',
'colpack_prefix.xml',
'eigen_prefix.xml',
'fadbad_prefix.xml',
'ipopt_prefix.xml',
'sacado_prefix.xml',
'cppad_testvector.xml'
];
var list_current0 = [
'cmake.xml#The CMake Program',
'cmake.xml#CMake Command',
'cmake.xml#CMake Command.Build Directory',
'cmake.xml#make check',
'cmake.xml#cmake_verbose_makefile',
'cmake.xml#generator',
'cmake.xml#cppad_prefix',
'cmake.xml#cppad_postfix',
'cmake.xml#cmake_install_includedirs',
'cmake.xml#cmake_install_libdirs',
'cmake.xml#cmake_install_datadir',
'cmake.xml#cmake_install_docdir',
'cmake.xml#package_prefix',
'cmake.xml#cppad_cxx_flags',
'cmake.xml#cppad_cxx_flags.C++11',
'cmake.xml#cppad_profile_flag',
'cmake.xml#cppad_profile_flag.Eigen and Fadbad',
'cmake.xml#cppad_testvector',
'cmake.xml#cppad_max_num_threads',
'cmake.xml#cppad_tape_id_type',
'cmake.xml#cppad_tape_id_type.cstdint',
'cmake.xml#cppad_tape_addr_type',
'cmake.xml#cppad_tape_addr_type.cstdint',
'cmake.xml#cppad_deprecated'
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