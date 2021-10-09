import React, { useState } from 'react';

function DryHerbCard({herbTitle, src, details}) {

    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped)
    }

    return (
        <div className="card-container col-md-4 clickable-card" onClick={handleClick}>
            <div className={`card__inner ${flipped ? 'isFlipped' : ''}`}>
                <div className=" card__face card__face--front">
                    <div className="card mb-4 box-shadow">
                        <p className="card-text">{herbTitle}</p>
                        <img className="card-img-top card-img-style" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={src}
                            data-holder-rendered="true"
                        />
                        <div className="card-body">
                            <div className='card-button'>
                                <button 
                                    className="btn btn-success"
                                    onClick={handleClick}
                                >Details and Pricing</button>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clickable-card card__face card__face--back">
                    <div className="card mb-4 box-shadow card__content">
                        <img className="card-img-top card-img-style" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={src}
                            data-holder-rendered="true"
                        />
                        <div className="card-body">
                            <p className="card-text">{details}</p>
                            <div className='card-button'>
                                <button 
                                    className="btn btn-success"
                                    onClick={handleClick}
                                >
                                    Back
                                </button>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DryHerbCard;
