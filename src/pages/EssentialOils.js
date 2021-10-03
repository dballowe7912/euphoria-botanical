import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import { renderList } from '../helper.js';

import {essentialOils10ml} from '../data.js';
import {essentialOilsRollons} from '../data.js';

function EssentialOils() {
    console.log(renderList(essentialOils10ml))
    return (
        <div className="essential-oils-page">
            <div className="custom-font">
                <Navbar/>
                <h3 className="text-center list-title">Essential Oils (10ml)</h3>
                <div className="container">
                    {renderList(essentialOils10ml)}  
                </div>
                <h3 className="text-center list-title">Essential Oils (Roll-on)</h3>
                <div className="container">
                    {renderList(essentialOilsRollons)}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default EssentialOils;