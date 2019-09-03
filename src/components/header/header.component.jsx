import React from 'react';
import './header.styles.scss';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from './crwn.svg';

import Cart from '../cart/cart.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

const Header = ({user, hidden}) => {
    return <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option"> SHOP </Link>
            <Link to="/contact" className="option"> CONTACT </Link>
            {
                user ? 
                    <div className="option" onClick={() => auth.signOut()}>
                     SIGN OUT
                    </div>
                 :
                    <Link to="/signin" className="option"> SIGN IN </Link>
            }
            <Cart/>
        </div>
        {
            hidden ?
                null
            :
               <CartDropDown/>
        }
    </div>
}

const mapStateToProps = ({user : {currentUser}, cart: {hidden}}) => {
    return {
        user: currentUser,
        hidden: hidden
    }
}

export default connect(mapStateToProps)(Header);