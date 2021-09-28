import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactPage() {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid" style={{maxWidth: "500px", height: "100vh"}}>
                <h1 style={{textAlign: "center", fontFamily: "'Charm', cursive "}}>Contact Us</h1>
                <div class="form-group">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="fullName" 
                        aria-describedby="Enter Name" 
                        placeholder="Full Name"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        aria-describedby="Enter Name" 
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        placeholder="Message"
                    >
                    </textarea> 
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage;