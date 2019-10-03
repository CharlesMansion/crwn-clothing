import React, { useState } from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import {auth, /*signInWithGoogle*/} from '../../firebase/firebase.utils';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
   
    const [userCredentials, setCredentials] = useState({email:'', password:''})
    const { email, password } = userCredentials

    const handleSubmit = async (e) => {
        e.preventDefault()
        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({
        //         email:'',
        //         password:''
        //     })
        // } catch (error){
        //     console.log(error)
        // }
        emailSignInStart(email,password)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setCredentials({...userCredentials, [name] : value})
    }
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput type='email' name='email' value={email} handleChange={handleChange} label='email' required/>
                    <FormInput type='password' name='password' value={password} handleChange={handleChange} label='password' required/>
                    <div className="buttons">
                        <CustomButton type='submit' value='Submit Form'> Sign In </CustomButton>
                        <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

const mapDispatchToProps = (dispatch) => {
    return {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
    }
}
export default connect(null, mapDispatchToProps)(SignIn);