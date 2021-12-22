import React, { useEffect } from 'react';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <div className="bg-light contact-page">
            <div className="container-fluid" style={{maxWidth: "500px", height: "100vh"}}>
                <h1 className="custom-font text-center contact-title">Contact Us</h1>
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
                        <a className="nav-link" style={{color: '#000'}} href="https://g.page/euphoria-botanical?share">
                        <h5>Address: </h5>
                        <div>233 E. Main St</div>
                        <div>Kilgore, TX 75666</div>
                        </a>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;