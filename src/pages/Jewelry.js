import React, { useEffect } from 'react';
import Footer from '../components/Footer/Footer';

import { renderList } from '../helper';

import { connect } from 'react-redux';
import {addItem} from '../redux/cart/cart.actions';

import { spellJarEarrings } from '../data';
import { spellJarNecklace } from '../data';
import { crystalSpellNecklace } from '../data';
import { spiritualMoonchildProducts } from '../data';


const Jewelry = ({ addItem }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let newList = spellJarEarrings.map((i) => 
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

    let newList2 = spellJarNecklace.map((i) => 
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

    let newList3 = crystalSpellNecklace.map((i) => 
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

    let newList4 = spiritualMoonchildProducts.map((i) => 
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
        <div className="jewelry-page">
            <div className="custom-font">
                <h3 className="text-center list-title border-bottom">Spell Jar Earings</h3>
                <div className="container">
                    {newList}
                </div>
                <h3 className="text-center list-title border-bottom ">Spell Jar Necklace</h3>
                <div className="container">
                    {newList2}
                </div>
                <h3 className="text-center list-title border-bottom">Crystal Spell Necklace</h3>
                <div className="container">
                    {newList3}
                </div>
                <h3 className="text-center list-title border-bottom">Spiritual Moonchild Products</h3>
                <div className="container">
                    {newList4}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Jewelry);
