import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer.js';

import { connect } from 'react-redux';
import {addItem} from '../redux/cart/cart.actions';

import { decks, completeBoards, trucks, wheels, hardware, bearings } from '../data.js';
import SkateboardFooter from '../components/SkateboardFooter.js/SkateboardFooter.js';

const SkateShopPage = ({ addItem }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let newList = decks.map((i) => 
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

    let newList2 = completeBoards.map((i) => 
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

    let newList3 = trucks.map((i) => 
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

    let newList4 = wheels.map((i) => 
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

    let newList5 = hardware.map((i) => 
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

    let newList6 = bearings.map((i) => 
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
        <div className='custom-font skate-shop-page'>
                <h3 className="text-center list-title border-bottom">Skate Decks</h3>
                <div className="container">
                    {newList}  
                </div>
                <h3 className="text-center list-title border-bottom">Complete Skateboards</h3>
                <div className="container">
                    {newList2}
                </div>
                <h3 className="text-center list-title border-bottom">Trucks</h3>
                <div className="container">
                    {newList3}
                </div>
                <h3 className="text-center list-title border-bottom">Wheels</h3>
                <div className="container">
                    {newList4}
                </div>
                <h3 className="text-center list-title border-bottom">Bearings</h3>
                <div className="container">
                    {newList5}
                </div>
                <h3 className="text-center list-title border-bottom">Hardware</h3>
                <div className="container">
                    {newList6}
                </div>

            <SkateboardFooter/>
            <Footer/>
        </div>
    )
};

const mapStateToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapStateToProps)(SkateShopPage);
