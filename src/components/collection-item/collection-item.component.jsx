import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
    const { name, price } = item;
    console.log(item)
    return (
        <div className="row item" key={collectionItem.name}>
            <div className="col-9 list-name">
                {name}
            </div>
            <div className="col-3 list-price">
                {price.toFixed(2)}
                <button 
                    onClick={() => addItem(item)}
                    className='btn btn-success' 
                    style={{marginLeft: '10px'}}
                >
                    Add
                </button>
            </div>
            <div className="w-100"></div>
            <hr />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);