import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { renderList } from '../helper';

import { spellJarEarrings } from '../data';
import { spellJarNecklace } from '../data';
import { crystalSpellNecklace } from '../data';
import { spiritualMoonchildProducts } from '../data';


function Jewelry() {
    return (
        <div className="jewelry-page">
            <div className="custom-font">
                <Navbar/>
                <h3 className="text-center list-title">Spell Jar Earings</h3>
                <div className="container">
                    {renderList(spellJarEarrings)}
                </div>
                <h3 className="text-center list-title">Spell Jar Necklace</h3>
                <div className="container">
                    {renderList(spellJarNecklace)}
                </div>
                <h3 className="text-center list-title">Crystal Spell Necklace</h3>
                <div className="container">
                    {renderList(crystalSpellNecklace)}
                </div>
                <h3 className="text-center list-title">Spiritual Moonchild Products</h3>
                <div className="container">
                    {renderList(spiritualMoonchildProducts)}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Jewelry;
