import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import {essentialOils10ml} from '../data.js';
import {essentialOilsRollons} from '../data.js';


const renderListName = essentialOils10ml.map((oil) =>
            <>
            <div className="col-5 col-md-5 bulk-tea-list-name">
                    {oil.name}
            </div>
            <div className="col-1 col-md-1 bulk-tea-list">
                    {oil.price.toFixed(2)}
            </div>
            </>
        )

const renderListName2 = essentialOilsRollons.map((oil) =>
        <>
        <div className="col-5 col-md-5 bulk-tea-list-name">
                {oil.name}
        </div>
        <div className="col-1 col-md-1 bulk-tea-list">
                {oil.price.toFixed(2)}
        </div>
        </>
    )

function EssentialOils() {
    return (
        <div className="essential-oils-page">
            <div className="custom-font">
                <Navbar/>
                <h3 className="text-center bulk-tea-title">Essential Oils (10ml)</h3>
                <div className="container">
                    <div className="row">
                        {renderListName}
                    </div>
                </div>
                <h3 className="text-center bulk-tea-title">Essential Oils (Roll-on)</h3>
                <div className="container">
                    <div className="row">
                        {renderListName2}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default EssentialOils;