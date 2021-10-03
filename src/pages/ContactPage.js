import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactPage() {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid" style={{maxWidth: "500px", height: "100vh"}}>
                <h1 className="custom-font text-center contact-title">Contact Us</h1>
                {/* <form 
                    action="mailto:dballowe7912@gmail.com" 
                    method="POST" 
                    encType="multipart/form-data" 
                    name="EmailForm"
                >
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="fullName" 
                            aria-describedby="Enter Name" 
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control" 
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
                    <button 
                        className="btn btn-success"
                        type="submit"
                    >Submit
                    </button>
                </form> */}
                <div className="text-center custom-font contact-container">
                    <hr/>
                    <div>
                        <h5>Phone: </h5>
                        <p>903-983-0213</p>
                    </div>
                    <hr/>
                    <div>
                        <h5>Email: </h5>
                        <p>euphoriabotanical@gmail.com</p>
                    </div>
                    <hr/>
                    <div>
                        <h5>Address: </h5>
                        <div>233 E. Main St</div>
                        <div>Kilgore, TX 75666</div>
                    </div>
                    <hr/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage;