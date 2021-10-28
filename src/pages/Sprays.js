import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import { renderList } from '../helper';

import { roomSprays } from '../data';
import { bodySprays } from '../data';

const Sprays = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])                                                                                           

    return (
        <div className="sprays-page">
            <div className="custom-font">
                <Navbar/>
                <h3 className="text-center list-title border-bottom">Room Sprays</h3>
                <div className="container">
                    {renderList(roomSprays)}
                </div>
                <h3 className="text-center list-title border-bottom">Body Sprays</h3>
                <div className="container">
                    {renderList(bodySprays)}
                </div>
                <Footer/>
            </div>           
        </div>
    )
}

export default Sprays;
