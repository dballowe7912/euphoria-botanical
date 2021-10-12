import React from "react";

import centerTable from '../assets/carousel-photos/center-table.jpg';
import skateBoard from '../assets/carousel-photos/skate-board.jpg';
import potpourri from '../assets/carousel-photos/potpourri.jpg';

function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img className="d-block w-100" src={potpourri} alt="Potpourri"/>
                </div>
                <div className="carousel-item active">
                    <img className="d-block w-100" src={skateBoard} alt="Skateboards"/>                       
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={centerTable} alt="Store Center Table"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;