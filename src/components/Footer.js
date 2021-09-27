import React from 'react'

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                </a>
                <span className="text-muted">© 2019 Euphoria Botanical</span>
            </div>
        
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                {/* <li><a href="#" className="fa fa-facebook"></a></li>
                <li><a href="#" className="fa fa-instagram instagram"></a></li> */}
            </ul>
        </footer>
    )
}

export default Footer;
