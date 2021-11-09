import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer.js';

import { connect } from 'react-redux';
import {addItem} from '../redux/cart/cart.actions';

import {essentialOils10ml} from '../data.js';
import {essentialOilsRollons} from '../data.js';

const EssentialOils = ({addItem}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
    let newList = essentialOils10ml.map((i) => 
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

    
    let newList2 = essentialOilsRollons.map((i) => 
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
        <div className="essential-oils-page">
            <div className="custom-font">
                <h3 className="text-center list-title border-bottom">Essential Oils (10ml)</h3>
                <div className="container">
                    {newList} 
                </div>
                <h3 className="text-center list-title border-bottom">Essential Oils (Roll-on)</h3>
                <div className="container">
                    {newList2}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(EssentialOils);