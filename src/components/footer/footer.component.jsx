import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => (
    <footer className="page-footer font-small pt-4">
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
                    <li className='nav-item mb-2'>
                        <Link to="/terms-and-conditions">Terms and Conditions</Link>
                    </li>
                    <li className='nav-item mb-2'>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                </ul>
            </div>
            <div className="col footer-sitemap-column">
            <h5>Products</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <Link to="/shop/dry-herbs">Dry Herbs</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/shop/bulk-tea">Bulk Teas</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/shop/essential-oils">Essential Oils</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/shop/soaps">Handmade Soaps</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/shop/jewelry">Jewelry</Link>
                    </li>
                <li className="nav-item mb-2">
                    <Link to="/shop/sprays">Body and Room Sprays</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/shop/crystals-and-stones">Crystals and Stones</Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/shop/skate-shop">Skate Boards and Accessories</Link>
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
                        <span className="text-muted">?? 2022 Euphoria Botanical</span>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)


export default Footer;