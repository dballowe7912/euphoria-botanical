import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';

import {addItem} from '../redux/cart/cart.actions';
import { connect } from 'react-redux';

import { bulkTea } from '../data.js';


const BulkTea = ({addItem}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let newList = bulkTea.map((i) => 
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
    )

    return (
        <div className="bulk-tea-page custom-font">
            <h3 className="text-center list-title" >Bulk Tea</h3>
            <h5 className="text-center border-bottom">pricing per ounce</h5>
            <div className="container">
                    {newList}
            </div>
            <Footer/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(BulkTea);