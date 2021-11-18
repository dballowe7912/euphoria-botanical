import React, { Component } from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in custom-font'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required 
                        handleChange={this.handleChange}
                        label='email'
                    />

                    <FormInput
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange}
                        label='password'
                    />
                    <div className='buttons'>
                        <input className='btn btn-success' type='submit' value='Sign In' />
                        <input onClick={signInWithGoogle} className='btn btn-google' type='button' value='Sign In With Google' />
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;