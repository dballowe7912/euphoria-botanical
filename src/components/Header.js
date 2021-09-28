import React from 'react'

function Header() {
    return (
        <header className="header">
            <div className="container-fluid h-100">
                <div className="row align-items-center">                                      
                    <div className="col-6 text-center masthead" id="header-text"></div>
                    <div className="col-6 text-center">
                        <h1 className="fw-light">Euphoria Botanical</h1>
                        <p className="lead">We are here for all your botanical, medicinal & Skate Gear needs! </p>
                        <button className="btn btn-outline-secondary">Shop Now</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
