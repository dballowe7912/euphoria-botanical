import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { roomSprays, bodySprays } from './sprays.data';

const Sprays = ({ addItem }) => {

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
        <div className="sprays-page">
            <div className="custom-font">
                <h3 className="text-center list-title border-bottom">Room Sprays</h3>
                <div className="container">
                    {collectionList(roomSprays)}
                </div>
                <h3 className="text-center list-title border-bottom">Body Sprays</h3>
                <div className="container">
                    {collectionList(bodySprays)}
                </div>
            </div>           
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Sprays);