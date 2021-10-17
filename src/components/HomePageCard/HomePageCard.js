import React from 'react';
import { useHistory } from 'react-router';

import './HomePageCard.css';

const HomePageCard = ({ altPhoto, photoSrc, shopBtn, pageLink }) => {

    let history = useHistory();

    const handleClick = () => {
        history.push(pageLink);
    }

    return (
        <div 
            onClick={handleClick}
            className="homepage-card-container col-md-4 clickable-card"
        >
            <div className="card">
                <div className=" card__face card__face--front">
                    <div className="card">
                        <p className="card-text custom-font card-title">{shopBtn}</p>
                        <img className="card-img-top card-img-style" 
                            alt={altPhoto}
                            src={photoSrc}
                            data-holder-rendered="true"
                        />
                        <button className="btn btn-success shop-button">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageCard;
