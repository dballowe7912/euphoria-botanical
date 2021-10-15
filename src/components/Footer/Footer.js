import React from 'react';

import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="row row-col-4 py-5 my-5 border-top">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col footer-sitemap-column">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">Home</li>
                        <li className="nav-item mb-2">Contact</li>
                        <li className="nav-item mb-2">About Us</li>
                    </ul>
                </div>
                <div className="col footer-sitemap-column">
                    <h5>Products</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">Dry Herbs</li>
                        <li className="nav-item mb-2">Bulk Teas</li>
                        <li className="nav-item mb-2">Essential Oils</li>
                        <li className="nav-item mb-2">Handmade Soaps</li>
                        <li className="nav-item mb-2">Jewelry</li>
                        <li className="nav-item mb-2">Body and Room Sprays</li>
                        <li className="nav-item mb-2">Crystals and Stones</li>
                    </ul>
                </div>
            </div>
            <div className="row">
            <div className="col">
                <ul className="nav col-md-4 text-center align-items-center d-flex justify-content-center list-unstyled">
                    <li>
                        <a href="https://www.facebook.com/EUPHORIABOTANICALS/">
                            <i class="fab fa-facebook-square facebook-icon footer-icon"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/euphoriabotanical/">
                            <i class="fab fa-instagram-square instagram-icon footer-icon"></i>
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
}

export default Footer;