import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer.js';

function AboutPage() {
    return (
        <div 
            className="about-page" 
        >
            <Navbar/>
            <div className=" about-main-container" role="main">
                <h1 className="about-text">Euphoria Botanical</h1>
                <p>Euphoria Botanical is an Herb Shop located downtown in Kilgore, Texas. We have a large selection of CBD flowers, oils, 
                    salves and edibles available. We also serve the freshest herbs as well as a large variety of Kratom. Come check 
                    out our Essential Oils, Handmade Jewelry, Insence, Sage, Stones, Crystals, Handmade Soaps and even a Tea Lounge! Our 
                    local Euphoria Skate Shop offers Skate Clinics, Trejo Boards, Houston Skateboards and other skate gear and apperal.  </p>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutPage;