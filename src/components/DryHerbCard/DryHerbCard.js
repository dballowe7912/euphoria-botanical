import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import './DryHerbCard.css';

const DryHerbCard = ({ herbTitle, src, details, priceData, addItem }) => {

    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped)
    }

    return (
        <div 
            
            className="card-container col-md-4"
            key={herbTitle}
        >
            <div className={`card__inner ${flipped ? 'isFlipped' : ''}`}>

                <div className=" card__face card__face--front">
                    <div className="card">
                        <p className="card-text custom-font card-title">{herbTitle}</p>
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt={herbTitle} 
                            src={src}
                            data-holder-rendered="true"
                        />
                        <div className="card-body">
                            <p className="card-text custom-font card-summary">{details}</p>
                            <span onClick={handleClick}>
                                <i className="fas fa-arrow-right card-flip-icon"></i>
                            </span>
                        </div>
                    </div>
                </div>
                    
                <div className=" card__face card__face--back">
                    <div className="card">
                        <p className="card-text custom-font card-title">{herbTitle}</p>
                        <div className="card-body">
                            <div className="row border-bottom" style={{margin: "auto"}}>
                                <div className="col">Product</div>
                                <div className="col text-center">Size</div>
                                <div className="col text-right">Price</div>
                            </div>
                            {priceData.map(item  => (
                                <div key={item.id} className="row border-bottom" style={{margin: "auto"}}>
                                    <div className="col py-1">{item.type}</div>
                                    <div className="col text-center py-1">{item.size}</div>
                                    <div className="col text-right py-1">${item.price.toFixed(2)}</div>
                                    <button 
                                        className='btn btn-success' 
                                        onClick={() => addItem(item)}
                                    >+</button>
                                </div>
                            ))}
                            <span onClick={handleClick}>
                                <i className="fas fa-undo card-flip-icon"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(DryHerbCard);
