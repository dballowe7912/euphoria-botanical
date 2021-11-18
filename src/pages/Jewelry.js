import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import {addItem} from '../redux/cart/cart.actions';

import { spellJarEarrings } from '../data';
import { spellJarNecklace } from '../data';
import { crystalSpellNecklace } from '../data';
import { spiritualMoonchildProducts } from '../data';


const Jewelry = ({ addItem }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const collectionList = (collection) => collection.map((collectionItem) => 
        <div className="row item" key={collectionItem.name}>
            <div className="col-9 list-name">
            {collectionItem.name}
            </div>
            <div className="col-3 list-price">
            {collectionItem.price.toFixed(2)}
            <button 
                onClick={() => addItem(collectionItem)}
                className='btn btn-success'
                style={{marginLeft: '10px'}}
            >Add</button>
            </div>
            <div className="w-100"></div>
            <hr />
        </div>
    );

    return (
        <div className="jewelry-page">
            <div className="custom-font">
                <h3 className="text-center list-title border-bottom">Spell Jar Earings</h3>
                <div className="container">
                    {collectionList(spellJarEarrings)}
                </div>
                <h3 className="text-center list-title border-bottom ">Spell Jar Necklace</h3>
                <div className="container">
                    {collectionList(spellJarNecklace)}
                </div>
                <h3 className="text-center list-title border-bottom">Crystal Spell Necklace</h3>
                <div className="container">
                    {collectionList(crystalSpellNecklace)}
                </div>
                <h3 className="text-center list-title border-bottom">Spiritual Moonchild Products</h3>
                <div className="container">
                    {collectionList(spiritualMoonchildProducts)}
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Jewelry);
