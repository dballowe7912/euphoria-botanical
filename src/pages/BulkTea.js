import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import hibiscus from '../assets/teas/hibiscus.jpg';

function BulkTea() {
    return (
        <div>
            <Navbar/>
                

            <div className="album py-5 bg-light">
            <div className="container">

            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            style={{height: "225px", width: "100%", display: "block"}} 
                            src={hibiscus}
                            data-holder-rendered="true"
                        />
                        <div className="card-body">
                            <p className="card-text">Hibiscus Heaven</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={blueLotus} 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div className="card-body">
                        <p className="card-text">Blue Lotus / Nymphaea Caerulea</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div> */}
                {/* <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={catsClaw} 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                            <p className="card-text">Cats Claw / Uncaria Tomentosa</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>


</div>
</div>





            <Footer/>
        </div>
    )
}

export default BulkTea;