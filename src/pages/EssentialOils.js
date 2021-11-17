import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions';

import {essentialOils10ml} from '../data.js';
import {essentialOilsRollons} from '../data.js';

const EssentialOils = ({ addItem }) => {

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
            <button onClick={() => addItem(collectionItem)}>Add</button>
            </div>
            <div className="w-100"></div>
            <hr />
        </div>
    );

    return (
        <div className="essential-oils-page">
            <div className="custom-font">
                <h3 className="text-center list-title border-bottom">Essential Oils (10ml)</h3>
                <div className="container">
                    {collectionList(essentialOils10ml)} 
                </div>
                <h3 className="text-center list-title border-bottom">Essential Oils (Roll-on)</h3>
                <div className="container">
                    {collectionList(essentialOilsRollons)}
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(EssentialOils);