import React from 'react'
import Footer from '../../components/Footer/Footer'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

import './SignInAndSignUpPage.scss';

function SignInAndSignUpPage() {
    return (
        <div className='sign-in-and-sign-up w-100'>
            <div className='sign-up-and-sign-in-container'>
                <SignIn />
                <SignUp />
            </div>
            <Footer/>
        </div>
    )
}

export default SignInAndSignUpPage
