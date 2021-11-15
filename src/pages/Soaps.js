import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import {addItem} from '../redux/cart/cart.actions';

import { soaps } from '../data';
import { goatsMilk3oz } from '../data';
import { goatsMilk4oz } from '../data';
import { petiteGoatsMilk } from '../data';


const Soaps = ({ addItem }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const collectionList = (collection) => collection.map((i) => 
    <div className="row item" key={i.name}>
        <div className="col-9 list-name">
        {i.name}
        </div>
        <div className="col-3 list-price">
        {i.price.toFixed(2)}
        <button onClick={() => addItem(i)}>Add</button>
        </div>
        <div className="w-100"></div>
        <hr />
    </div>
    );

    return (
        <div className="soaps-page">
            <div className="custom-font">
                <h3 className="text-center list-title border-bottom">Soaps</h3>
                <div className="container">
                    {collectionList(soaps)}
                </div>
                <h3 className="text-center list-title border-bottom">Goats Milk (3 oz)</h3>
                <div className="container">
                    {collectionList(goatsMilk3oz)}
                </div>
                <h3 className="text-center list-title border-bottom">Goats Milk (4 oz)</h3>
                <div className="container">
                    {collectionList(goatsMilk4oz)}
                </div>
                <h3 className="text-center list-title border-bottom">Petite Goats Milk</h3>
                <div className="container">
                    {collectionList(petiteGoatsMilk)}
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Soaps);