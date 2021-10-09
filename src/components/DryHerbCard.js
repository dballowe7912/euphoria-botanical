import React, { useState } from 'react';

function DryHerbCard({herbTitle, src, details}) {

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
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DryHerbCard;
