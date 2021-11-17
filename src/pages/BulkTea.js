import React, { useEffect } from 'react';

import { addItem } from '../redux/cart/cart.actions';
import { connect } from 'react-redux';

import { bulkTea } from '../data.js';


const BulkTea = ({ addItem }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        <div className="bulk-tea-page custom-font">
            <h3 className="text-center list-title" >Bulk Tea</h3>
            <h5 className="text-center border-bottom">pricing per ounce</h5>
            <div className="container">
                    {collectionList(bulkTea)}
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(BulkTea);