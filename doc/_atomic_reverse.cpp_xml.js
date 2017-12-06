var list_across0 = [
'_contents_xml.htm',
'_reference.xml',
'_index.xml',
'_search_xml.htm',
'_external.xml'
];
var list_up0 = [
'cppad.xml',
'ad.xml',
'advalued.xml',
'atomic.xml',
'atomic_base.xml',
'atomic_reverse.xml',
'atomic_reverse.cpp.xml'
];
var list_down3 = [
'checkpoint.xml',
'atomic_base.xml'
];
var list_down2 = [
'atomic_ctor.xml',
'atomic_option.xml',
'atomic_afun.xml',
'atomic_forward.xml',
'atomic_reverse.xml',
'atomic_for_sparse_jac.xml',
'atomic_rev_sparse_jac.xml',
'atomic_for_sparse_hes.xml',
'atomic_rev_sparse_hes.xml',
'atomic_base_clear.xml',
'atomic_get_started.cpp.xml',
'atomic_norm_sq.cpp.xml',
'atomic_reciprocal.cpp.xml',
'atomic_set_sparsity.cpp.xml',
'atomic_tangent.cpp.xml',
'atomic_eigen_mat_mul.cpp.xml',
'atomic_eigen_mat_inv.cpp.xml',
'atomic_eigen_cholesky.cpp.xml',
'atomic_mat_mul.cpp.xml'
];
var list_down1 = [
'atomic_reverse.cpp.xml'
];
var list_current0 = [
'atomic_reverse.cpp.xml#Purpose',
'atomic_reverse.cpp.xml#function',
'atomic_reverse.cpp.xml#Start Class Definition',
'atomic_reverse.cpp.xml#Constructor',
'atomic_reverse.cpp.xml#forward',
'atomic_reverse.cpp.xml#reverse',
'atomic_reverse.cpp.xml#Use Atomic Function'
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