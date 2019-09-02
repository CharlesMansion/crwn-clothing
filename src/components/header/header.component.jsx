import React from 'react';
import './header.styles.scss';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from './crwn.svg';

import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

const Header = ({user}) => {
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
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);