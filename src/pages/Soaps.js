import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { soaps } from '../data';
import { goatsMilk3oz } from '../data';
import { goatsMilk4oz } from '../data';
import { petiteGoatsMilk } from '../data';


const renderListName = soaps.map((soap) =>
    <>
    <div className="col-5 col-md-5 bulk-tea-list-name">
            {soap.name}
    </div>
    <div className="col-1 col-md-1 bulk-tea-list">
            {soap.price.toFixed(2)}
    </div>
    </>
)

const renderListName2 = goatsMilk3oz.map((soap) =>
    <>
    <div className="col-5 col-md-5 bulk-tea-list-name">
            {soap.name}
    </div>
    <div className="col-1 col-md-1 bulk-tea-list">
            {soap.price.toFixed(2)}
    </div>
    </>
)

const renderListName3 = goatsMilk4oz.map((soap) =>
    <>
    <div className="col-5 col-md-5 bulk-tea-list-name">
            {soap.name}
    </div>
    <div className="col-1 col-md-1 bulk-tea-list">
            {soap.price.toFixed(2)}
    </div>
    </>
)

const renderListName4 = petiteGoatsMilk.map((soap) =>
    <>
    <div className="col-5 col-md-5 bulk-tea-list-name">
            {soap.name}
    </div>
    <div className="col-1 col-md-1 bulk-tea-list">
            {soap.price.toFixed(2)}
    </div>
    </>
)

function Soaps() {
    return (
        <div className="soaps-page">
            <div className="custom-font">
            <Navbar/>
            <h3 className="text-center bulk-tea-title">Soaps</h3>
            <div className="container">
                <div className="row">
                    {renderListName}
                </div>
            </div>
            <h3 className="text-center bulk-tea-title">Goats Milk (3 oz)</h3>
            <div className="container">
                <div className="row">
                    {renderListName2}
                </div>
            </div>
            <h3 className="text-center bulk-tea-title">Goats Milk (4 oz)</h3>
            <div className="container">
                <div className="row">
                    {renderListName3}
                </div>
            </div>
            <h3 className="text-center bulk-tea-title">Petite Goats Milk</h3>
            <div className="container">
                <div className="row">
                    {renderListName4}
                </div>
            </div>
            <Footer/>
            </div>
        </div>
    )
}

export default Soaps