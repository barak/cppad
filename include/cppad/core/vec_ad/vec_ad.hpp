# ifndef CPPAD_CORE_VEC_AD_VEC_AD_HPP
# define CPPAD_CORE_VEC_AD_VEC_AD_HPP
/* --------------------------------------------------------------------------
CppAD: C++ Algorithmic Differentiation: Copyright (C) 2003-19 Bradley M. Bell

CppAD is distributed under the terms of the
             Eclipse Public License Version 2.0.

This Source Code may also be made available under the following
Secondary License when the conditions for such availability set forth
in the Eclipse Public License, Version 2.0 are satisfied:
      GNU General Public License, Version 2.0 or later.
---------------------------------------------------------------------------- */
# include <cppad/local/pod_vector.hpp>
namespace CppAD { //  BEGIN_CPPAD_NAMESPACE
/*
 ------------------------------------------------------------------------------
$begin vec_ad_comp_assign$$
$spell
    Vec
    op
$$
$section VecAD: Prints Error Message If A Compound Assignment Is Used$$

$head Syntax$$
$codei%CPPAD_VEC_AD_COMP_ASSIGN(%cop%)
%$$
$icode%ref cop right
%$$

$head CPPAD_VEC_AD_COMP_ASSIGN$$
This macro defines the compound assignment operator $icode cop$$
for a VecAD reference element to be an error with an error message.

$head cop$$
Is one of the following computed assignment operators:
+= , -= , *= , /=.

$head ref$$
is the VecAD reference.

$head right$$
is the right hand side for the compound assignment.

$head Source$$
$srccode%hpp% */
# define CPPAD_VEC_AD_COMP_ASSIGN(cop)                              \
VecAD_reference& operator cop (const VecAD_reference<Base> &right)  \
{   CPPAD_ASSERT_KNOWN(false,                                       \
        "Can't use VecAD<Base>::reference on left side of " #cop    \
    );                                                              \
    return *this;                                                   \
}                                                                   \
VecAD_reference& operator cop (const AD<Base> &right)               \
{   CPPAD_ASSERT_KNOWN(false,                                       \
        "Can't use VecAD<Base>::reference on left side of " #cop    \
    );                                                              \
    return *this;                                                   \
}                                                                   \
VecAD_reference& operator cop (const Base &right)                   \
{   CPPAD_ASSERT_KNOWN(false,                                       \
        "Can't use VecAD<Base>::reference on left side of " #cop    \
    );                                                              \
    return *this;                                                   \
}                                                                   \
VecAD_reference& operator cop (int right)                           \
{   CPPAD_ASSERT_KNOWN(false,                                       \
        "Can't use VecAD<Base>::reference on left side of " #cop    \
    );                                                              \
    return *this;                                                   \
}
/* %$$
$end
------------------------------------------------------------------------------
$begin vec_ad_reference$$
$spell
    Vec
    ind
    const
$$
$section VecAD Element Reference Class$$

$head Syntax$$
$codei%VecAD_reverence %ref%(%vec%, %ind%)
%$$
$codei%ref% = %right%
%$$
$codei ref cop right
%$$
$icode%element% = %ref%.ADBase()
%$$

$head vec_$$
This private data is a reference to $icode vec$$ in the constructor.

$head ind_$$
This private data is a copy of $icode ind$$ in the constructor.

$head Base$$
Elements of this reference class act like an
$codei%AD<%Base%>%$$ object (in a restricted sense),
in addition they track (on the tape) the index $icode ind$$ they correspond to.

$head vec$$
is the vector containing the element being referenced and has prototype
$codei%
    VecAD_reference<%Base%> %ref%
%$$

$head ind$$
is the index of the element being referenced and has prototype
$codei%
    const AD<%Base%>& ind
%$$

$head right$$
Is the right hand side of the assignment statement and has one
of the following prototypes:
$codei%
    int                            %right%
    const %Base%&                  %right%
    const AD<%Base%>&              %right%
    const VecAD_reverence<%Base%>& %right%
%$$

$head cop$$
Is one of the following computed assignment operators:
+= , -= , *= , /=.
All of these operations report an error.

$head element$$
Is a copy of the element corresponding to the reference $icode ref$$
and has prototype:
$codei%
    AD<%Base%> %element%
%$$

$end
*/
template <class Base>
class VecAD_reference {
    friend bool  Parameter<Base> (const VecAD<Base> &vec);
    friend bool  Variable<Base>  (const VecAD<Base> &vec);
    friend class VecAD<Base>;
    friend class local::ADTape<Base>;

private:
    VecAD<Base>& vec_;  // reverence to vector
    AD<Base>     ind_;  // index for this element
public:
    VecAD_reference(VecAD<Base>& vec, const AD<Base>& ind)
        : vec_( vec ) , ind_(ind)
    {   CPPAD_ASSERT_KNOWN( ! Dynamic(ind),
            "index for element of this VecAD object is a dynamic paramerer"
        );
    }

    // assignment operators
    void operator = (const VecAD_reference<Base> &right);
    void operator = (const AD<Base> &right);
    void operator = (const Base     &right);
    void operator = (int             right);

    // compound assignments
    CPPAD_VEC_AD_COMP_ASSIGN( += )
    CPPAD_VEC_AD_COMP_ASSIGN( -= )
    CPPAD_VEC_AD_COMP_ASSIGN( *= )
    CPPAD_VEC_AD_COMP_ASSIGN( /= )


    /// Conversion from VecAD_reference to AD<Base>.
    /// puts the correspond vecad load instruction in the tape.
    AD<Base> ADBase(void) const
    {   // start with default construtor (hence dynamic_ is false).
        AD<Base> result;

        size_t i = static_cast<size_t>( Integer(ind_) );
        CPPAD_ASSERT_UNKNOWN( i < vec_.length_ );

        // AD<Base> value corresponding to this element
        result.value_ = vec_.data_[i];

        // index corresponding to this element
        if( Variable(vec_) )
        {
            local::ADTape<Base>* tape = AD<Base>::tape_ptr(vec_.tape_id_);
            CPPAD_ASSERT_UNKNOWN( tape != CPPAD_NULL );
            CPPAD_ASSERT_UNKNOWN( vec_.offset_ > 0  );

            size_t load_op_index = tape->Rec_.num_load_op_rec();
            if( Parameter(ind_) )
            {   CPPAD_ASSERT_UNKNOWN( local::NumRes(local::LdpOp) == 1 );
                CPPAD_ASSERT_UNKNOWN( local::NumArg(local::LdpOp) == 3 );
                CPPAD_ASSERT_UNKNOWN( Constant(ind_) );

                // copy of parameter in the tape
                addr_t ind_taddr = tape->Rec_.put_con_par(ind_.value_);

                // put operand addresses in tape
                tape->Rec_.PutArg(
                    (addr_t) vec_.offset_, ind_taddr, (addr_t) load_op_index
                );
                // put operator in the tape, ind_ is a parameter
                result.taddr_ = tape->Rec_.PutLoadOp(local::LdpOp);

                // change result to variable for this load
                result.tape_id_ = tape->id_;
                result.ad_type_ = variable_enum;
            }
            else
            {   CPPAD_ASSERT_UNKNOWN( local::NumRes(local::LdvOp) == 1 );
                CPPAD_ASSERT_UNKNOWN( local::NumArg(local::LdvOp) == 3 );
                CPPAD_ASSERT_UNKNOWN( Variable(ind_) );

                // put operand addresses in tape, ind_ is a variable
                result.taddr_ = tape->Rec_.PutLoadOp(local::LdvOp);
                tape->Rec_.PutArg(
                    (addr_t) vec_.offset_,
                    (addr_t) ind_.taddr_,
                    (addr_t) load_op_index
                );

                // change result to variable for this load
                result.tape_id_ = tape->id_;
                result.ad_type_ = variable_enum;
            }
        }
        return result;
    }
};
// ---------------------------------------------------------------------------

/*!
Vector of AD objects that tracks indexing operations on the tape.
*/
template <class Base>
class VecAD {
    friend bool  Parameter<Base> (const VecAD<Base> &vec);
    friend bool  Variable<Base>  (const VecAD<Base> &vec);
    friend class local::ADTape<Base>;
    friend class VecAD_reference<Base>;

    friend std::ostream& operator << <Base>
        (std::ostream &os, const VecAD<Base> &vec_);
private:
    /// size of this VecAD vector
    const  size_t   length_;

    /// elements of this vector
    local::pod_vector_maybe<Base> data_;

    /// offset in cummulate vector corresponding to this object
    size_t offset_;

    /// tape id corresponding to the offset
    tape_id_t tape_id_;
public:
    /// declare the user's view of this type here
    typedef VecAD_reference<Base> reference;

    /// default constructor
    /// initialize tape_id_ same as for default constructor; see default.hpp
    VecAD(void)
    : length_(0)
    , offset_(0)
    , tape_id_(0)
    {   CPPAD_ASSERT_UNKNOWN( Parameter(*this) ); }

    /// sizing constructor
    /// initialize tape_id_ same as for parameters; see ad_copy.hpp
    VecAD(size_t n)
    : length_(n)
    , offset_(0)
    , tape_id_(0)
    {   if( length_ > 0 )
        {   size_t i;
            Base zero(0);
            data_.extend(length_);

            // Initialize data to zero so all have same value.
            // This uses less memory and avoids a valgrind error
            // during TapeRec<Base>::PutPar
            for(i = 0; i < length_; i++)
                data_[i] = zero;
        }
        CPPAD_ASSERT_UNKNOWN( Parameter(*this) );
    }

    /// destructor
    ~VecAD(void)
    { }

    /// number of elements in the vector
    size_t size(void)
    {   return length_; }

    /// element access (not taped)
    ///
    /// \param i
    /// element index
    Base &operator[](size_t i)
    {
        CPPAD_ASSERT_KNOWN(
            Parameter(*this),
            "VecAD: cannot use size_t indexing because this"
            " VecAD vector is a variable."
        );
        CPPAD_ASSERT_KNOWN(
            i < length_,
            "VecAD: element index is >= vector length"
        );

        return data_[i];
    }

    /*! delayed taped elemement access

    \param x
    element index

    \par
    This operation may convert this vector from a parameter to a variable
    */
    VecAD_reference<Base> operator[](const AD<Base> &x)
    {
        CPPAD_ASSERT_KNOWN(
            0 <= Integer(x),
            "VecAD: element index is less than zero"
        );
        CPPAD_ASSERT_KNOWN(
            static_cast<size_t>( Integer(x) ) < length_,
            "VecAD: element index is >= vector length"
        );

        // if no need to track indexing operation, return now
        if( Parameter(*this) & Parameter(x) )
            return VecAD_reference<Base>(*this, x);

        CPPAD_ASSERT_KNOWN(
            Parameter(*this) | Parameter(x) | (tape_id_ == x.tape_id_),
            "VecAD: vector and index are variables for"
            " different tapes."
        );

        if( Parameter(*this) )
        {   // must place a copy of vector in tape
            offset_ =
            AD<Base>::tape_ptr(x.tape_id_)->AddVec(length_, data_);

            // Advance pointer by one so starts at first component of this
            // vector; i.e., skip length at begining (so is always > 0)
            offset_++;

            // tape id corresponding to this offest
            tape_id_ = x.tape_id_;
        }

        return VecAD_reference<Base>(*this, x);
    }

};


/*!
Taped setting of element to a value.

\param y
value that element is set to.
*/
template <class Base>
void VecAD_reference<Base>::operator=(const AD<Base> &y)
{
    CPPAD_ASSERT_KNOWN( ! Dynamic(y),
        "value assigned to element of VecAD object is a dynamic paramerer"
    );

    // index in vector for this element
    size_t i = static_cast<size_t>( Integer(ind_) );
    CPPAD_ASSERT_UNKNOWN( i < vec_.length_ );

    // Base part of assignment for this element
    vec_.data_[i] = y.value_;

    // check if there is a recording in progress
    local::ADTape<Base>* tape = AD<Base>::tape_ptr();
    if( tape == CPPAD_NULL )
        return;

    // tape_id cannot match the defautl value zero
    tape_id_t tape_id = tape->id_;
    CPPAD_ASSERT_UNKNOWN( tape_id > 0 );

    // check if vec, index and y match tape_id
    bool match_vec = vec_.tape_id_ == tape_id;
    bool match_ind = ind_.tape_id_  == tape_id;
    bool match_y   = y.tape_id_     == tape_id;

    // check if index and y are dynamic parmaerters
    bool dyn_vec = false;
    bool dyn_ind = match_ind & (ind_.ad_type_  == dynamic_enum);
    bool dyn_y   = match_y   & (y.ad_type_     == dynamic_enum);

    // check if index and y are variables
    bool var_vec = match_vec;
    bool var_ind = match_ind & (ind_.ad_type_   == variable_enum);
    bool var_y   = match_y   & (y.ad_type_      == variable_enum);

    // check if vector, index, and y are constants
    bool con_vec = ! ( dyn_vec | var_vec);
    bool con_ind = ! ( dyn_ind | var_ind);
    bool con_y   = ! ( dyn_y   | var_y  );
    if( con_vec & con_ind & con_y )
        return;

# ifndef NDEBUG
    if( match_vec & match_ind ) CPPAD_ASSERT_KNOWN(
        vec_.tape_id_ == ind_.tape_id_ ,
        "VecAD: vector and index are dynamic parameters or variables "
        "on different treads."
    );
    if( match_vec & match_y ) CPPAD_ASSERT_KNOWN(
        vec_.tape_id_ == y.tape_id_ ,
        "VecAD: vector and element are dynamic parameters or variables "
        "on different treads."
    );
    if( match_ind & match_y ) CPPAD_ASSERT_KNOWN(
        ind_.tape_id_ == y.tape_id_ ,
        "VecAD: index and element are dynamic parameters or variables "
        "on different treads."
    );
# endif

    if( con_vec )
    {   // must place a copy of vector in tape
        vec_.offset_ = tape->AddVec(vec_.length_, vec_.data_);

        // advance offset to be start of vector plus one
        (vec_.offset_)++;

        // tape id corresponding to this offest
        vec_.tape_id_ = y.tape_id_;
    }
    CPPAD_ASSERT_UNKNOWN( Variable(vec_) );

    // record the setting of this array element
    if( var_y )
    {   if( con_ind )
        {   CPPAD_ASSERT_UNKNOWN( local::NumArg(local::StpvOp) == 3 );
            CPPAD_ASSERT_UNKNOWN( local::NumRes(local::StpvOp) == 0 );

            // copy of parameter in the tape
            addr_t ind_taddr = tape->Rec_.put_con_par(ind_.value_);

            // put operand addresses in tape
            tape->Rec_.PutArg((addr_t) vec_.offset_, ind_taddr, y.taddr_);

            // put operator in the tape, ind_ is parameter, y is variable
            tape->Rec_.PutOp(local::StpvOp);
        }
        else
        {   CPPAD_ASSERT_UNKNOWN( var_ind );

            CPPAD_ASSERT_UNKNOWN( local::NumArg(local::StvvOp) == 3 );
            CPPAD_ASSERT_UNKNOWN( local::NumRes(local::StvvOp) == 0 );
            CPPAD_ASSERT_UNKNOWN( ind_.taddr_ > 0 );

            // put operand addresses in tape
            tape->Rec_.PutArg((addr_t) vec_.offset_, ind_.taddr_, y.taddr_);

            // put operator in the tape, ind_ is variable, y is variable
            tape->Rec_.PutOp(local::StvvOp);
        }
    }
    else
    {   CPPAD_ASSERT_UNKNOWN( con_y)

        // put value of the parameter y in the tape
        addr_t p = tape->Rec_.put_con_par(y.value_);

        // record the setting of this array element
        CPPAD_ASSERT_UNKNOWN( vec_.offset_ > 0 );
        if( con_ind )
        {   CPPAD_ASSERT_UNKNOWN( local::NumArg(local::StppOp) == 3 );
            CPPAD_ASSERT_UNKNOWN( local::NumRes(local::StppOp) == 0 );

            // copy of parameter in the tape
            addr_t ind_taddr = tape->Rec_.put_con_par(ind_.value_);

            // put operand addresses in tape
            tape->Rec_.PutArg((addr_t) vec_.offset_, ind_taddr, p);

            // put operator in the tape, ind_ is parameter, y is parameter
            tape->Rec_.PutOp(local::StppOp);
        }
        else
        {   CPPAD_ASSERT_UNKNOWN( var_ind );

            CPPAD_ASSERT_UNKNOWN( local::NumArg(local::StvpOp) == 3 );
            CPPAD_ASSERT_UNKNOWN( local::NumRes(local::StvpOp) == 0 );
            CPPAD_ASSERT_UNKNOWN( ind_.taddr_ > 0 );

            // put operand addresses in tape
            tape->Rec_.PutArg((addr_t) vec_.offset_, ind_.taddr_, p);

            // put operator in the tape, ind_ is variable, y is parameter
            tape->Rec_.PutOp(local::StvpOp);
        }
    }
}

template <class Base>
void VecAD_reference<Base>::operator=(const Base &y)
{   *this = AD<Base>(y); }

/*!
Taped setting of element to a value.

\param y
value that element is set to.

\par
this case gets folded into case where value is AD<Base>.
*/
template <class Base>
void VecAD_reference<Base>::operator=
(const VecAD_reference<Base> &y)
{   *this = y.ADBase(); }

/*!
Taped setting of element to a value.

\param y
value that element is set to.

\par
this case gets folded into case where value is Base.
*/
template <class Base>
void VecAD_reference<Base>::operator=(int y)
{   *this = Base(y); }


} // END_CPPAD_NAMESPACE

// preprocessor symbols that are local to this file
# undef CPPAD_VEC_AD_COMP_ASSIGN

# endif
