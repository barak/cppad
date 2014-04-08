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
'download.xml'
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
'cppad_test.xml',
'pkgconfig.xml',
'installunix.xml'
];
var list_current0 = [
'download.xml#Purpose',
'download.xml#Distribution Directory',
'download.xml#Compressed Tar File',
'download.xml#Compressed Tar File.Current Version',
'download.xml#Compressed Tar File.Monthly Versions',
'download.xml#Compressed Tar File.Release Versions',
'download.xml#Compressed Tar File.Unix File Extraction',
'download.xml#Compressed Tar File.Windows File Extraction',
'download.xml#Compressed Tar File.Install Instructions',
'download.xml#Subversion',
'download.xml#Subversion.Limitations',
'download.xml#Subversion.Current Version',
'download.xml#Subversion.Stable Versions',
'download.xml#Subversion.Release Versions',
'download.xml#Subversion.Install Instructions'
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
