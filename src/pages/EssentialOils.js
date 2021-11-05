import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer.js';

import { renderList } from '../helper.js';

import {essentialOils10ml} from '../data.js';
import {essentialOilsRollons} from '../data.js';

const EssentialOils = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="essential-oils-page">
            <div className="custom-font">
                <h3 className="text-center list-title border-bottom">Essential Oils (10ml)</h3>
                <div className="container">
                    {renderList(essentialOils10ml)}  
                </div>
                <h3 className="text-center list-title border-bottom">Essential Oils (Roll-on)</h3>
                <div className="container">
                    {renderList(essentialOilsRollons)}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default EssentialOils;