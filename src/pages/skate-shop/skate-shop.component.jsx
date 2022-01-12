import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

import { decks, completeBoards, trucks, wheels, hardware, bearings } from './skate-shop.data.js';
import SkateboardFooter from '../../components/skateboard-footer/skateboard-footer.component.jsx';

const SkateShopPage = ({ addItem }) => {

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
            {/* <button 
                onClick={() => addItem(collectionItem)}
                className='btn btn-success'
                style={{marginLeft: '10px'}}
            >Add</button> */}
            </div>
            <div className="w-100"></div>
            <hr />
        </div>
    );

    return (
        <div className='custom-font skate-shop-page'>
                <h3 className="text-center list-title border-bottom">Skate Decks</h3>
                <div className="container">
                    {collectionList(decks)}  
                </div>
                <h3 className="text-center list-title border-bottom">Complete Skateboards</h3>
                <div className="container">
                    {collectionList(completeBoards)}
                </div>
                <h3 className="text-center list-title border-bottom">Trucks</h3>
                <div className="container">
                    {collectionList(trucks)}
                </div>
                <h3 className="text-center list-title border-bottom">Wheels</h3>
                <div className="container">
                    {collectionList(wheels)}
                </div>
                <h3 className="text-center list-title border-bottom">Bearings</h3>
                <div className="container">
                    {collectionList(bearings)}
                </div>
                <h3 className="text-center list-title border-bottom">Hardware</h3>
                <div className="container">
                    {collectionList(hardware)}
                </div>
            <SkateboardFooter/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(SkateShopPage);
