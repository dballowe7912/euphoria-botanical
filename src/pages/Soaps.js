import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';

import { renderList } from '../helper';

import { soaps } from '../data';
import { goatsMilk3oz } from '../data';
import { goatsMilk4oz } from '../data';
import { petiteGoatsMilk } from '../data';


const Soaps = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="soaps-page">
            <div className="custom-font">
                <h3 className="text-center list-title border-bottom">Soaps</h3>
                <div className="container">
                    {renderList(soaps)}
                </div>
                <h3 className="text-center list-title border-bottom">Goats Milk (3 oz)</h3>
                <div className="container">
                    {renderList(goatsMilk3oz)}
                </div>
                <h3 className="text-center list-title border-bottom">Goats Milk (4 oz)</h3>
                <div className="container">
                    {renderList(goatsMilk4oz)}
                </div>
                <h3 className="text-center list-title border-bottom">Petite Goats Milk</h3>
                <div className="container">
                    {renderList(petiteGoatsMilk)}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Soaps;