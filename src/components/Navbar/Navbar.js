import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top nav-style">
        <Link 
            className="navbar-brand" 
            to="/"
        >
            Euphoria Botanical
        </Link>
        <button 
            className="navbar-toggler" 
            id="toggleButt" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" ng-click="isCollapsed = !isCollapsed">
                        Products
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/herbs">Dry Herbs</Link>
                        <Link className="dropdown-item" to="/teas">Bulk Teas</Link>
                        <Link className="dropdown-item" to="/oils">Essential Oils</Link>
                        <Link className="dropdown-item" to="/soaps">Soaps</Link>
                        <Link className="dropdown-item" to="/jewelry">Jewelry</Link>
                        <Link className="dropdown-item" to="/sprays">Body and Room Sprays</Link>   
                        <Link className="dropdown-item" to="/crystals-and-stones">Crystals and Stones</Link>   
                        <Link className="dropdown-item" to="/skateboard-shop">Skateboards and Accessories</Link>   
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about" ng-click="isCollapsed = !isCollapsed">About us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar;
