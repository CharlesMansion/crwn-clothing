import React from 'react';
import './header.styles.scss';

import { connect } from 'react-redux';
import  { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from './crwn.svg';

import Cart from '../cart/cart.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

//import {auth} from '../../firebase/firebase.utils';

import { HeaderContainer, LogoLink, OptionLink, OptionsContainer } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({user, hidden, signOutStart}) => {
    

    
    return ( <HeaderContainer>
        <LogoLink to="/">
            <Logo className="logo"/>
        </LogoLink>
        <OptionsContainer>
            <OptionLink to="/shop"> SHOP </OptionLink>
            <OptionLink to="/contact"> CONTACT </OptionLink>
            {
                user ? 
                    <OptionLink as='div' onClick={signOutStart}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        signOutStart: () => dispatch(signOutStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);