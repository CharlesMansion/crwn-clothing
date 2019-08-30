import React from 'react';
import './signup.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {email, displayName, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        } else {
             try {
                const { user } =  await auth.createUserWithEmailAndPassword(email,password)
                await createUserProfileDocument(user, {displayName})
                this.setState({
                        displayName:'',
                        email:'',
                        password:'',
                        confirmPassword:''
                })
            } catch (error) {
                console.log(error)
            }
        }
       
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({

                [name]:value

        })

    }

    render() {
        return (
            <div className="sign-up">
                <h2>I don't have an account yet</h2>
                <span>Enter your info here.</span>
               
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange} label="Name" required/>
                    <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="Email" required/>
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="Password" required/>
                    <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} label="Confirm Password" required/>
                    <div className="buttons">
                        <CustomButton type='submit' value='Submit Form'> Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;