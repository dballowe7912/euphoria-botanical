import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { soaps, petiteGoatsMilk, goatsMilk4oz, goatsMilk3oz } from './soaps.data';

const Soaps = ({ addItem }) => {

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