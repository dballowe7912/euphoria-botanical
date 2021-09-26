import React from 'react';

// Images
import akuamma from '../assets/Akuamma.jpg';
import blueLotus from '../assets/blue-lotus.jpg';
import catsClaw from '../assets/cats-claw.jpeg';
import damiana from '../assets/damiana.jpeg';
import dreamHerb from '../assets/dream-herb.jpeg';
import horneyGoat from '../assets/horney-goat-weed.jpeg';
import kanna from '../assets/kanna.jpeg';
import kava from '../assets/kava.jpeg';
import dagga from '../assets/wild-dagga.jpeg';
import wormwood from '../assets/wormwood.jpeg';
import palo from '../assets/palo.jpeg';
import whiteWillow from '../assets/white-willow.jpeg';
import marshmallow from '../assets/marshmallow.jpeg';
import ilex from '../assets/ilex.jpeg';
import lavender from '../assets/lavender.jpeg';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function DryHerbs() {
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

            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={kanna}
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Kanna Shred / Sceletium Tortusom</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="row">

        <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={kava} 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Kava Extract / Piper Methysticum</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={dagga}
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Wild Dagga (Lions Tail) / Leonotis Leonurus</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={wormwood} 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Wormwood / Artemisia</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="row">

        <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={palo}
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Palo Azul - Detox Cheese</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={whiteWillow} 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">White Willow Bark Powder</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={marshmallow}
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Marshmallow Root Powder / Althaea Officinalis</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="row">

        <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={dreamHerb}
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Calea Zacatachichi / Calea Ternifolia</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={ilex}
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                        <p class="card-text">Ilex Guayusa</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src={lavender}
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Lavendar Petals / Lamianceae Lavendula</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

            {/* 




            


            


          


          


            

            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src="./assets/maitake.jpeg" 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Maitake Mushroom</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src="./assets/matcha.jpeg" 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Matcha Green Tea</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src="./assets/reishi.jpeg" 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Reishi Mushroom / Lingzhi</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src="./assets/skull-cap.jpeg" 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Blue Skull Cap Leaf / Scutellaria Laterflora</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src="./assets/tumeric.jpeg" 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Tumeric Capsule / Tumeric Powder</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src="./assets/valerian.jpeg" 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">Valerian / Valeriana Officinalis</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" 
                        data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" 
                        alt="Thumbnail [100%x225]" 
                        src="./assets/white-sage.jpeg
                        " 
                        data-holder-rendered="true" 
                        style={{height: "225px", width: "100%", display: "block"}}
                    />
                    <div class="card-body">
                    <p class="card-text">White Sage</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}

          
        </div> 
      </div>
      <Footer/>
    </div>
    )
}

export default DryHerbs;
