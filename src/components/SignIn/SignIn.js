import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
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

                    <input className='btn btn-success' type='submit' value='Sign In' />
                </form>
            </div>
        )
    }
}

export default SignIn;