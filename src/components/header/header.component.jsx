import React from 'react';
import './header.styles.scss';

import { connect } from 'react-redux';
import  { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from './crwn.svg';

import Cart from '../cart/cart.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import {auth} from '../../firebase/firebase.utils';

import { HeaderContainer, LogoLink, OptionLink, OptionsContainer } from './header.styles';

const Header = ({user, hidden}) => {
    return ( <HeaderContainer>
        <LogoLink to="/">
            <Logo className="logo"/>
        </LogoLink>
        <OptionsContainer>
            <OptionLink to="/shop"> SHOP </OptionLink>
            <OptionLink to="/contact"> CONTACT </OptionLink>
            {
                user ? 
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                     SIGN OUT
                    </OptionLink>
                 :
                    <OptionLink to="/signin"> SIGN IN </OptionLink>
            }
            <Cart/>
        </OptionsContainer>
        {
            hidden ?
                null
            :
               <CartDropDown/>
        }
    </HeaderContainer> 
   )
}

const mapStateToProps = createStructuredSelector({
        user: selectCurrentUser,
        hidden: selectCartHidden
    })

export default connect(mapStateToProps)(Header);