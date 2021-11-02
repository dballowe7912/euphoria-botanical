import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import SignIn from '../../components/SignIn/SignIn'


function SignInAndSignUpPage() {
    return (
        <div className='sign-in-and-sign-up w-100'>
            <Navbar/>
            <SignIn />
            <Footer/>
        </div>
    )
}

export default SignInAndSignUpPage
