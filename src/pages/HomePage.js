import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

import oil from '../assets/homepage/oil.jpg';
import herbs from '../assets/homepage/herbs.jpg';
import teawall from '../assets/homepage/tea-wall.jpg';
import soap from '../assets/homepage/soaps.jpg';

function HomePage() {
    return (
        <div className="home-page">
            <Navbar/>
            <Header/>
            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" 
                                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                                    alt="Essential Oils Thumbnail" 
                                    src={oil}
                                    data-holder-rendered="true"
                                />
                                <div className="card-body">
                                    <h5 className="card-text">Essential Oils</h5>
                                    <div className="d-flex align-items-center shop-button">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn btn-success">Shop Oils</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top" 
                                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                                alt="Dry Herbs Thumbnail" 
                                src={herbs} 
                                data-holder-rendered="true" 
                            />
                            <div className="card-body">
                                <h5 className="card-text">Dry Herbs</h5>
                                <div className="d-flex align-items-center shop-button">
                                    <div className="btn-group">
                                        <button type="button" className=" btn btn-success">Shop Herbs</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" 
                                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                                alt="Bulk Teas Thumbnail" 
                                src={teawall} 
                                data-holder-rendered="true" 
                                />
                                <div className="card-body">
                                    <h5 className="card-text">Bulk Teas</h5>
                                    <div className="d-flex align-items-center shop-button">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn btn-success">Shop Teas</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">                 
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" 
                                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                                    alt="Handcrafted Soap Thumbnail" 
                                    src={soap}
                                    data-holder-rendered="true"
                                />
                                <div className="card-body">
                                    <h5 className="card-text">Hand Crafted Soaps</h5>
                                    <div className="d-flex align-items-center shop-button">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn btn-success">Shop Soap</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" 
                                    data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                                    alt="Jewelry Thumbnail" 
                                    src={oil}
                                    data-holder-rendered="true"
                                />
                                <div className="card-body">
                                    <h5 className="card-text">Jewelry</h5>
                                    <div className="d-flex align-items-center shop-button">
                                        <div className="btn-group">
                                            <button 
                                                type="button" 
                                                className="btn btn btn-success">Shop Jewelry</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel/>
            <Footer/>
        </div>
    )
}

export default HomePage;
