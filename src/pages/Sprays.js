import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { bodySprays } from '../data';
import { roomSprays } from '../data';

const renderListName = bodySprays.map((spray) =>
    <>
    <div className="col-5 col-md-5 bulk-tea-list-name">
            {spray.name}
    </div>
    <div className="col-1 col-md-1 bulk-tea-list">
            {spray.price.toFixed(2)}
    </div>
    </>
)

const renderListName2 = roomSprays.map((spray) =>
    <>
    <div className="col-5 col-md-5 bulk-tea-list-name">
            {spray.name}
    </div>
    <div className="col-1 col-md-1 bulk-tea-list">
            {spray.price.toFixed(2)}
    </div>
    </>
)

function Sprays() {
    return (
        <div className="sprays-page">
            <div className="custom-font">
                <Navbar/>
                <h3 className="text-center bulk-tea-title">Room Sprays</h3>
                <div className="container">
                    <div className="row">
                        {renderListName}
                    </div>
                </div>
                <h3 className="text-center bulk-tea-title">Body Sprays</h3>
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

export default Sprays;
