import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { crystalsAndStones } from '../data';
import { renderList } from '../helper';

function CrystalsAndStones() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Qty of two Code

    // const timesTwo = (arr) => {
    //     for ( let i = 0; i < arr.length; i++ ) {
    //         if (arr[i].qty) {
    //             console.log(arr[i].qty);
    //         }
    //     }
    // }

    // timesTwo(crystalsAndStones)

    return (
        <div className="custom-font">
            <Navbar/>
            <h3 className="text-center list-title">Crystals And Stones</h3>
            <div className="container">
                    {renderList(crystalsAndStones)}
            </div>
            <Footer/>
        </div>
    )

}

export default CrystalsAndStones;