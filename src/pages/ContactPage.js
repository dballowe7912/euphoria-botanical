import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactPage() {
    return (
        <div>
            <Navbar/>
            <div class="form-group">
            <input 
                type="text" 
                class="form-control" 
                id="fullName" 
                aria-describedby="Enter Name" 
                placeholder="Full Name"
            />
        </div>
            <Header/>
            <Footer/>
        </div>
    )
}

export default ContactPage;