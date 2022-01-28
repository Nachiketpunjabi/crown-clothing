import React from 'react'
import FormInput from '../form/FormInput'
import CustomButton from '../custom-button/CustomButton'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils.js'

import './sign-up.scss'

class SignUp extends React.Component{
    constructor(){
        super();


        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    render(){
        const {displayName,email,password,confirmPassword}= this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have an account </h2>
                <span> Sign up with your email and pass</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName'>

                    </FormInput>
                </form>
            </div>
        )
    }
}


export default signUp
