import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';

import { crystalsAndStones } from '../data';
import { renderList } from '../helper';

const CrystalsAndStones = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="custom-font crystals-and-stones-page">
            <h3 className="text-center list-title border-bottom">Crystals And Stones</h3>
            <div className="container">
                    {renderList(crystalsAndStones)}
            </div>
            <Footer/>
        </div>
    )
}

export default CrystalsAndStones;