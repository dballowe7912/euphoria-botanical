import React, { useState } from 'react';

import './DryHerbCard.css';

function DryHerbCard({herbTitle, src, details, priceData}) {

    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped)
    }

    return (
        <div 
            onClick={handleClick}
            className="card-container col-md-4 clickable-card"
        >
            <div className={`card__inner ${flipped ? 'isFlipped' : ''}`}>

                <div className=" card__face card__face--front">
                    <div className="card">
                        <p className="card-text custom-font card-title">{herbTitle}</p>
                        <img className="card-img-top card-img-style" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={src}
                            data-holder-rendered="true"
                        />
                        <div className="card-body">
                            <p className="card-text custom-font card-summary">{details}</p>
                            <span>
                                <i className="fas fa-arrow-right card-flip-icon"></i>
                            </span>
                        </div>
                    </div>
                </div>
                    
                <div className=" card__face card__face--back">
                    <div className="card">
                        <p className="card-text custom-font card-title">{herbTitle}</p>
                        
                        <div className="card-body">
                        <p className="card-text custom-font card-pricing">{}</p>
                            <div className="row border-bottom" style={{margin: "auto"}}>
                                <div className="col">Product</div>
                                <div className="col text-center">Size</div>
                                <div className="col text-right">Price</div>
                            </div>
                            {priceData.map((i) => (
                                <div className="row" style={{margin: "auto"}}>
                                    <div className="col py-1">{i.type}</div>
                                    <div className="col text-center py-1">{i.size}</div>
                                    <div className="col text-right py-1">${i.price.toFixed(2)}</div>
                                </div>
                        ))}
                        <span>
                            <i className="fas fa-undo card-flip-icon"></i>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DryHerbCard;
