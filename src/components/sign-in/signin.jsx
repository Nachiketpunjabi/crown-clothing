import React, { Component } from 'react'
import FormInput from '../form/FormInput';
import './signin.scss'
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export class signin extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        } 
    }
    
    handlesubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        this.setState({email:'',password:''})
    }
    handleChange = e =>{
        const {value,name} = e.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlesubmit}>
                    <FormInput name="email" type="email"value={this.state.email} required  handleChange={this.handleChange} label="email"/>
                    <FormInput name="password" type="password" value={this.state.password} required handleChange={this.handleChange} label="password"/>
                    <div className='buttons'>
                    <CustomButton type="submit" > Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google SignIn</CustomButton>

                    </div>
                </form>
            </div>
        )
    }
}

export default signin
