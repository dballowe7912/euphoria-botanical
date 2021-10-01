import React from 'react';
import { dryHerbs } from '../data';

// Images
import akuamma from '../assets/dry-herb-photos/akuamma.jpg';
import blueLotus from '../assets/dry-herb-photos/blue-lotus.jpg';
import catsClaw from '../assets/dry-herb-photos/cats-claw.jpeg';
import damiana from '../assets/dry-herb-photos/damiana.jpeg';
import dreamHerb from '../assets/dry-herb-photos/dream-herb.jpeg';
import horneyGoat from '../assets/dry-herb-photos/horney-goat-weed.jpeg';
import kanna from '../assets/dry-herb-photos/kanna.jpeg';
import kava from '../assets/dry-herb-photos/kava.jpeg';
import dagga from '../assets/dry-herb-photos/wild-dagga.jpeg';
import wormwood from '../assets/dry-herb-photos/wormwood.jpeg';
import palo from '../assets/dry-herb-photos/palo.jpeg';
import whiteWillow from '../assets/dry-herb-photos/white-willow.jpeg';
import marshmallow from '../assets/dry-herb-photos/marshmallow.jpeg';
import ilex from '../assets/dry-herb-photos/ilex.jpeg';
import lavender from '../assets/dry-herb-photos/lavender.jpeg';
import maitake from '../assets/dry-herb-photos/maitake.jpeg';
import matcha from '../assets/dry-herb-photos/matcha.jpeg';
import reishi from '../assets/dry-herb-photos/reishi.jpeg';
import skullCap from '../assets/dry-herb-photos/skull-cap.jpeg';
import tumeric from '../assets/dry-herb-photos/tumeric.jpeg';
import valerian from '../assets/dry-herb-photos/valerian.jpeg';
import whiteSage from '../assets/dry-herb-photos/white-sage.jpeg';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function DryHerbs() {
    console.log(dryHerbs);
    return (
    <div className="dry-herbs-page">
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
                            src={akuamma}
                            data-holder-rendered="true"
                        />
                        <div className="card-body">
                            <p className="card-text">Akuamma / Picralima Nitida</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
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
                </div>
                <div className="col-md-4">
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
                </div>
            </div>

            <div className="row">


                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={damiana}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                            <p className="card-text">Damiana / Turnera Diffusa</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={horneyGoat}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Horney Goat Weed / Epimedium Grandiflorum</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={kanna}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Kanna Shred / Sceletium Tortusom</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">

            <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={kava} 
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Kava Extract / Piper Methysticum</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={dagga}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Wild Dagga (Lions Tail) / Leonotis Leonurus</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={wormwood} 
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Wormwood / Artemisia</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">

            <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={palo}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Palo Azul - Detox Cheese</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={whiteWillow} 
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">White Willow Bark Powder</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={marshmallow}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Marshmallow Root Powder / Althaea Officinalis</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">

            <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={dreamHerb}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Calea Zacatachichi / Calea Ternifolia</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={ilex}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                            <p className="card-text">Ilex Guayusa</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={lavender}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Lavendar Petals / Lamianceae Lavendula</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="row">

            <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={maitake}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Maitake Mushroom</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={matcha}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Matcha Green Tea</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={reishi} 
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Reishi Mushroom / Lingzhi</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                
            <div className="row">

            <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={skullCap} 
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Blue Skull Cap Leaf / Scutellaria Laterflora</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={tumeric} 
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Tumeric Capsule / Tumeric Powder</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={valerian}
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">Valerian / Valeriana Officinalis</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='row'>

            <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="card-img-top" 
                            data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                            alt="Thumbnail [100%x225]" 
                            src={whiteSage} 
                            data-holder-rendered="true" 
                            style={{height: "225px", width: "100%", display: "block"}}
                        />
                        <div className="card-body">
                        <p className="card-text">White Sage</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                
            </div> 
        </div>
        <Footer/>
    </div>
    )
}

export default DryHerbs;
