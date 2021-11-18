import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import './sign-in-and-sign-up.styles.scss';

function SignInAndSignUpPage() {
    return (
        <div className='sign-in-and-sign-up w-100'>
            <div className='sign-up-and-sign-in-container'>
                <SignIn />
                <SignUp />
            </div>
        </div>
    )
}

export default SignInAndSignUpPage;
