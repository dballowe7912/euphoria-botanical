import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { renderList } from '../helper';

import { soaps } from '../data';
import { goatsMilk3oz } from '../data';
import { goatsMilk4oz } from '../data';
import { petiteGoatsMilk } from '../data';


function Soaps() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="soaps-page">
            <div className="custom-font">
                <Navbar/>
                <h3 className="text-center list-title">Soaps</h3>
                <div className="container">
                    {renderList(soaps)}
                </div>
                <h3 className="text-center list-title">Goats Milk (3 oz)</h3>
                <div className="container">
                    {renderList(goatsMilk3oz)}
                </div>
                <h3 className="text-center list-title">Goats Milk (4 oz)</h3>
                <div className="container">
                    {renderList(goatsMilk4oz)}
                </div>
                <h3 className="text-center list-title">Petite Goats Milk</h3>
                <div className="container">
                    {renderList(petiteGoatsMilk)}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Soaps;