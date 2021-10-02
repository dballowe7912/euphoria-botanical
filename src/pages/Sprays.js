import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { renderList } from '../helper';
import { bodySprays } from '../data';
import { roomSprays } from '../data';

function Sprays() {
    return (
        <div className="sprays-page">
            <div className="custom-font">
                <Navbar/>
                <h3 className="text-center list-title">Room Sprays</h3>
                <div className="container">
                    {renderList(roomSprays)}
                </div>
                <h3 className="text-center list-title">Body Sprays</h3>
                <div className="container">
                    {renderList(bodySprays)}
                </div>
                <Footer/>
            </div>           
        </div>
    )
}

export default Sprays;
