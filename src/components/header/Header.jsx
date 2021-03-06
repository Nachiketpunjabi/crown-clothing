import React from 'react'
import './Header.scss'
import {Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-component/cart';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createSelectorCreator, createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
const Header = ({currentUser,hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>:<Link className="option" to="/signin">SIGN IN</Link>
                    
                }
                <CartIcon/>
            </div>
            {
                hidden ? null:
                <CartDropdown/>
            }
        </div>
    ) 
} 

// Gets access to user data from redux store and assigns to currentUser
const mapStateToProps = ({user:{ currentUser},cart:{hidden}}) =>createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden

});

export default connect(mapStateToProps)(Header);

// connect is higher order function which takes in two functions, one shown here