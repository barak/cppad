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
'atomic_mat_mul.cpp.xml'
];
var list_down3 = [
'arithmetic.xml',
'std_math_ad.xml',
'mathother.xml',
'condexp.xml',
'discrete.xml',
'atomic.xml'
];
var list_down2 = [
'checkpoint.xml',
'atomic_base.xml'
];
var list_down1 = [
'atomic_ctor.xml',
'atomic_option.xml',
'atomic_afun.xml',
'atomic_forward.xml',
'atomic_reverse.xml',
'atomic_for_sparse_jac.xml',
'atomic_rev_sparse_jac.xml',
'atomic_rev_sparse_hes.xml',
'atomic_base_clear.xml',
'atomic_get_started.cpp.xml',
'atomic_norm_sq.cpp.xml',
'atomic_reciprocal.cpp.xml',
'atomic_tangent.cpp.xml',
'atomic_hes_sparse.cpp.xml',
'atomic_mat_mul.cpp.xml'
];
var list_down0 = [
'atomic_matrix_mul.hpp.xml'
];
var list_current0 = [
'atomic_mat_mul.cpp.xml#Class Definition',
'atomic_mat_mul.cpp.xml#Use Atomic Function',
'atomic_mat_mul.cpp.xml#Use Atomic Function.Constructor',
'atomic_mat_mul.cpp.xml#Use Atomic Function.Recording',
'atomic_mat_mul.cpp.xml#Use Atomic Function.forward',
'atomic_mat_mul.cpp.xml#Use Atomic Function.reverse',
'atomic_mat_mul.cpp.xml#Use Atomic Function.option',
'atomic_mat_mul.cpp.xml#Use Atomic Function.for_sparse_jac',
'atomic_mat_mul.cpp.xml#Use Atomic Function.rev_sparse_jac',
'atomic_mat_mul.cpp.xml#Use Atomic Function.rev_sparse_hes'
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
