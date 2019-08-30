import React from 'react';
import './signinnup.styles.scss';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

const SignInnUp = () => {
    return <div className="sign-in-n-up">
        <SignIn/>
        <SignUp/>
    </div>
}

export default SignInnUp;