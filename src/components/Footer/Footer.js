import React from 'react';
import { Link } from 'react-router-dom';

import alien from '../../assets/skateboard-logos/alien_workshop_logo.png';
import antihero from '../../assets/skateboard-logos/antihero-logo.png';
import dgk from '../../assets/skateboard-logos/DGK_logo.png';
import flip from '../../assets/skateboard-logos/Flip_logo.jpg';
import foundation from '../../assets/skateboard-logos/foundation_logo.png';
import powell from '../../assets/skateboard-logos/powell_logo.webp';
import santacruz from '../../assets/skateboard-logos/santa_cruz_logo.png';
import sk8mafia from '../../assets/skateboard-logos/sk8mafia_logo.png';
import techne from '../../assets/skateboard-logos/techne_logo.png';

import './Footer.css';

const Footer = () => (
    <footer className="page-footer font-small pt-4">
        <div className="row row-col-4 py-3 my-3 border-top">
            <div className="col footer-sitemap-column">
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/about">About Us</Link>
                    </li>
                </ul>
            </div>
            <div className="col footer-sitemap-column">
                <h5>Products</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <Link to="/herbs">Dry Herbs</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/teas">Bulk Teas</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/oils">Essential Oils</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/soaps">Handmade Soaps</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/jewelry">Jewelry</Link>
                        </li>
                    <li className="nav-item mb-2">
                        <Link to="/sprays">Body and Room Sprays</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/crystals-and-stones">Crystals and Stones</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/skateboard-shop">Skate Boards and Accessories</Link>
                    </li>
                </ul>
            </div>
            <div className="col"></div>
            <div className="col"></div>
        </div>
        <div className="row d-flex justify-content-around py-2 my-2" style={{maxWidth: '100%'}}>
            <img src={alien} style={{width: '100px', height: '100px'}}/>
            <img src={antihero} style={{width: '100px', height: '100px'}}/>
            <img src={dgk} style={{backgroundColor: 'black'}}/>
            <img src={techne} style={{ backgroundColor: 'black', width: '100px', height: '100px' }}/>
            <img src={sk8mafia} style={{ backgroundColor: 'black', width: '100px', height: '100px' }}/>
        </div>
        <div className="row d-flex justify-content-around py-2 my-2" style={{maxWidth: '100%'}}>
            <img src={flip} style={{width: '100px', height: '100px'}}/>
            <img src={foundation} style={{width: 'auto', height: '100px'}}/>
            <img src={santacruz} style={{width: '100px', height: '100px'}} />
            <img src={powell} style={{width: '100px', height: '100px'}}/>
        </div>
        <div className="row" style={{maxWidth: '100%'}}>
            <div className="col">
                <ul className="nav col-md-4 text-center align-items-center d-flex justify-content-center list-unstyled">
                    <li>
                        <a href="https://www.facebook.com/EUPHORIABOTANICALS/">
                            <i className="fab fa-facebook-square facebook-icon footer-icon"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/euphoriabotanical/">
                            <i className="fab fa-instagram-square instagram-icon footer-icon"></i>
                        </a>
                    </li>
                    <li>
                        <span className="text-muted">© 2019 Euphoria Botanical</span>
                    </li>
                </ul>
            </div>
            

                {/* <div className="col">
                    <img src={alien} style={{width: '100px', height: 'auto'}}/>
                </div>
                <div className="col">
                    <img src={alien} style={{width: '100px', height: 'auto'}}/>
                </div>
                <div className="col">
                    <img src={alien} style={{width: '100px', height: 'auto'}}/>
                </div>
                <div className="col">
                    <img src={alien} style={{width: '100px', height: 'auto'}}/>
                </div> */}
            </div>
            
    </footer>
)


export default Footer;