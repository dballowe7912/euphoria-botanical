import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './navbar.styles.scss';

const Navbar = ({ currentUser, hidden }) => {

    const [ handleToggleClick, setHandleToggleClick ] = useState(false)

    return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top nav-style">
        <Link 
            className="navbar-brand" 
            to="/"
        >
            Euphoria Botanical
        </Link>
        <p 
            className='c d-flex custom-font justify-content-center'
        >
            903-983-0213
            <br/>
            Call to order
        </p>
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

        <div 
            className={`collapse navbar-collapse ${handleToggleClick ? ' show' : ''}}`} 
            id="navbarSupportedContent"
        >
        
            <ul className="navbar-nav ml-auto">
                <li className="nav-item" onClick={() => setHandleToggleClick(!handleToggleClick)}>
                    <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" ng-click="isCollapsed = !isCollapsed">
                        Products
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown" onClick={() => setHandleToggleClick(!handleToggleClick)}>
                        <Link className="dropdown-item" to="/shop/dry-herbs">Dry Herbs</Link>
                        <Link className="dropdown-item" to="/shop/bulk-tea">Bulk Teas</Link>
                        <Link className="dropdown-item" to="/shop/essential-oils">Essential Oils</Link>
                        <Link className="dropdown-item" to="/shop/soaps">Soaps</Link>
                        <Link className="dropdown-item" to="/shop/jewelry">Jewelry</Link>
                        <Link className="dropdown-item" to="/shop/sprays">Body and Room Sprays</Link>   
                        <Link className="dropdown-item" to="/shop/crystals-and-stones">Crystals and Stones</Link>   
                        <Link className="dropdown-item" to="/shop/skate-shop">Skateboards and Accessories</Link>   
                    </div>
                </li>
                <li className="nav-item" >
                    <Link 
                        className="nav-link" 
                        to="/about" 
                        ng-click="isCollapsed = !isCollapsed"
                        onClick={() => setHandleToggleClick(!handleToggleClick)}
                    >
                        About us
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link 
                        className="nav-link" 
                        to="/contact"
                        onClick={() => setHandleToggleClick(!handleToggleClick)}
                    >
                        Contact
                    </Link>
                </li>
                {/* <li className="nav-item" >
                    {
                        currentUser ? 
                        <div className='nav-link sign-out' onClick={() => auth.signOut()}>Sign out</div>
                        :
                        <Link 
                            className='nav-link' 
                            to='/signin'
                            onClick={() => setHandleToggleClick(!handleToggleClick)}
                        >
                            Sign in
                        </Link>
                    }
                </li> */}
                {/* <li className='nav-item'>
                    <CartIcon className='disabled'/>
                </li> */}
            </ul>
            {/* {
                hidden ? null :
                <CartDropdown/>
            } */}
        </div>
    </nav>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Navbar);
