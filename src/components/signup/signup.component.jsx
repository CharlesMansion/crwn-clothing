import React, {useState} from 'react';
import './signup.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions'

// import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

const SignUp = ({signUpStart}) => {
    const [userCredentials, setCredentials] = useState({
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''})

    const {email, displayName, password, confirmPassword} = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        } else {
            //  try {
            //     const { user } =  await auth.createUserWithEmailAndPassword(email,password)
            //     await createUserProfileDocument(user, {displayName})
            //     this.setState({
            //             displayName:'',
            //             email:'',
            //             password:'',
            //             confirmPassword:''
            //     })
            // } catch (error) {
            //     console.log(error)
            // }
       // REDUX-SAGA WAY OF HANDLING THINGS
            console.log(displayName)
            signUpStart(email, displayName, password)
        }
       
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setCredentials({...userCredentials,[name]:value })

    }
        return (
            <div className="sign-up">
                <h2>I don't have an account yet</h2>
                <span>Enter your info here.</span>
               
                <form onSubmit={handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Name" required/>
                    <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required/>
                    <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required/>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required/>
                    <div className="buttons">
                        <CustomButton type='submit' value='Submit Form'> Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

const mapDispatchToProps = (dispatch) => {
    return {
        signUpStart : (email, displayName, password) => dispatch(signUpStart({email, displayName, password}))
    }
}


export default connect(null, mapDispatchToProps)(SignUp);