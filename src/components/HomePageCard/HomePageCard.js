import React from 'react';
import { useHistory } from 'react-router';

import './HomePageCard.scss';

const HomePageCard = ({ altPhoto, title, linkUrl, imageUrl }) => {

    let history = useHistory();

    const handleClick = () => {
        history.push(linkUrl);
    }

    return (
        <div 
            onClick={handleClick}
            className="homepage-card-container col-md-4 clickable-card"
        >
            <div className="card">
                <div className=" card__face card__face--front">
                    <div className="card">
                        <p className="card-text custom-font card-title">{title}</p>
                        <div className="card-img-top card-img-style" 
                            alt={altPhoto}
                            data-holder-rendered="true"
                            style={{
                                backgroundImage: `url(${imageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                        <button 
                            className="btn btn-success shop-button"
                            style={{
                                marginTop: '10px',
                                width: 'auto'
                            }}
                        >Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageCard;
