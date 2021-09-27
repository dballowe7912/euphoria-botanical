import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import teaWall from '../assets/homepage/tea-wall.jpg';
import centerTable from '../assets/homepage/center-table.jpg';
import skateBoard from '../assets/homepage/skate-board.jpg';

function HomePage() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img className="d-block w-100" src={teaWall} alt="First slide"/>
                            <div class="carousel-caption">
                                <div>
                                    <h5>Euphoria Botanical</h5>
                                    <p>Let Euphoria Botanical be your go to source for all of your botanical needs and requests.</p>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={skateBoard} alt="Second slide"/>
                            <div class="carousel-caption">
                                        <div>
                                            <h5>Euphoria Botanical</h5>
                                            <p>Let Euphoria Botanical be your go to source for all of your botanical needs and requests.</p>
                                        </div>
                                    </div>
                            </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={centerTable} alt="Third slide"/>
                            <div class="carousel-caption">
                                        <div>
                                            <h5>Euphoria Botanical</h5>
                                            <p>Let Euphoria Botanical be your go to source for all of your botanical needs and requests.</p>
                                        </div>
                                    </div>
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
            {/* <Header/> */}
            <Footer/>
        </div>
    )
}

export default HomePage;