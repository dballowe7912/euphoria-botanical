import React from 'react';
import { Link }  from 'react-router-dom';

function DryHerbCard(props) {
    return (
        <Link to="/home" className="col-md-4 clickable-card">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top card-img-style" 
                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                    alt="Thumbnail [100%x225]" 
                    src={props.src}
                    data-holder-rendered="true"
                />
                <div className="card-body">
                    <p className="card-text">{props.herbTitle}</p>
                    <div className='card-button'>
                        <button className="btn btn-success">Details and Pricing</button>                                
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default DryHerbCard;
