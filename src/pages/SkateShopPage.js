import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';

import { renderList } from '../helper.js';
import { decks, completeBoards, trucks, wheels, hardware, bearings } from '../data.js';

function SkateShopPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Navbar/>
                <h3 className="text-center list-title border-bottom">Skate Decks</h3>
                <div style={{wordWrap: "none"}} className="container">
                    {renderList(decks)}  
                </div>
                <h3 className="text-center list-title border-bottom">Complete Skateboards</h3>
                <div className="container">
                    {renderList(completeBoards)}
                </div>
                <h3 className="text-center list-title border-bottom">Trucks</h3>
                <div className="container">
                    {renderList(trucks)}
                </div>
                <h3 className="text-center list-title border-bottom">Wheels</h3>
                <div className="container">
                    {renderList(wheels)}
                </div>
                <h3 className="text-center list-title border-bottom">Bearings</h3>
                <div className="container">
                    {renderList(bearings)}
                </div>
                <h3 className="text-center list-title border-bottom">Hardware</h3>
                <div className="container">
                    {renderList(hardware)}
                </div>

            <Footer/>
        </div>
    )
}

export default SkateShopPage;
