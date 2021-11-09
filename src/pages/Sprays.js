import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';

import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions';

import { roomSprays } from '../data';
import { bodySprays } from '../data';

const Sprays = ({ addItem }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    
    let newList = roomSprays.map((i) => 
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

    
    let newList2 = bodySprays.map((i) => 
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
        <div className="sprays-page">
            <div className="custom-font">
                <h3 className="text-center list-title border-bottom">Room Sprays</h3>
                <div className="container">
                    {newList}
                </div>
                <h3 className="text-center list-title border-bottom">Body Sprays</h3>
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

export default connect(null, mapDispatchToProps)(Sprays);
