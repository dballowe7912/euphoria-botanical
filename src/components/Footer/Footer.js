import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <footer className="page-footer font-small pt-4">

        {/* Footer Index and Sitemap */}

        <div className="row row-col-4 py-3 my-3 border-top w-100" style={{ paddingLeft: '10px'}}>
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
            </div>
            
    </footer>
)


export default Footer;