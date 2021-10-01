import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { spellJarEarrings } from '../data';
import { spellJarNecklace } from '../data';
import { crystalSpellNecklace } from '../data';
import { spiritualMoonchildProducts } from '../data';


const renderListName = spellJarEarrings.map((earring) =>
    <>
    <div className="col-5 col-md-5 bulk-tea-list-name">
            {earring.name}
    </div>
    <div className="col-1 col-md-1 bulk-tea-list">
            {earring.price.toFixed(2)}
    </div>
    </>
)

const renderListName2 = spellJarNecklace.map((necklace) =>
    <>
    <div className="col-5 col-md-5 bulk-tea-list-name">
            {necklace.name}
    </div>
    <div className="col-1 col-md-1 bulk-tea-list">
            {necklace.price.toFixed(2)}
    </div>
    </>
)

const renderListName3 = crystalSpellNecklace.map((necklace) =>
    <>
    <div className="col-5 col-md-5 bulk-tea-list-name">
            {necklace.name}
    </div>
    <div className="col-1 col-md-1 bulk-tea-list">
            {necklace.price.toFixed(2)}
    </div>
    </>
)

const renderListName4 = spiritualMoonchildProducts.map((product) =>
    <>
    <div className="col-5 col-md-5 bulk-tea-list-name">
            {product.name}
    </div>
    <div className="col-1 col-md-1 bulk-tea-list">
            {product.price.toFixed(2)}
    </div>
    </>
)

function Jewelry() {
    return (
        <div className="jewelry-page">
            <div className="custom-font">
                <Navbar/>
                <h3 className="text-center bulk-tea-title">Spell Jar Earings</h3>
                <div className="container">
                    <div className="row">
                        {renderListName}
                    </div>
                </div>
                <h3 className="text-center bulk-tea-title">Spell Jar Necklace</h3>
                <div className="container">
                    <div className="row">
                        {renderListName2}
                    </div>
                </div>
                <h3 className="text-center bulk-tea-title">Spell Spell Necklace</h3>
                <div className="container">
                    <div className="row">
                        {renderListName3}
                    </div>
                </div>
                <h3 className="text-center bulk-tea-title">Spiritual Moonchild Products</h3>
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

export default Jewelry;
