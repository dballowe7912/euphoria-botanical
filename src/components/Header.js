import React from 'react';

function Header() {    

    const handleClick = () => {
        window.scrollTo(0, 600)
    }

    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                    <h1 className="fw-light">EUPHORIA BOTANICAL</h1>
                    <p className="header-support-text">We are here for all your Botanical & Skate Gear needs! </p>
                    <button 
                        className="btn btn-success"
                        onClick={handleClick}
                    >
                        Shop Now!
                    </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
