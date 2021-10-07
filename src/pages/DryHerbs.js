import React, { useEffect } from 'react';
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
import DryHerbCard from '../components/DryHerbCard';

function DryHerbs() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
    <div className="dry-herbs-page">
        <Navbar/>
        <div className="album py-5 bg-light">
            <div className="container">

                <div className="row">
                    <DryHerbCard src={akuamma} herbTitle="Akuamma / Picralima Nitida"/>
                    <DryHerbCard src={blueLotus} herbTitle="Blue Lotus / Nymphaea Caerulea"/>
                    <DryHerbCard src={catsClaw} herbTitle="Cats Claw / Uncaria Tomentosa"/>
                </div> 

                <div className="row">
                    <DryHerbCard src={damiana} herbTitle="Damiana / Turnera Diffusa"/>
                    <DryHerbCard src={horneyGoat} herbTitle="Horney Goat Weed / Epimedium Grandiflorum"/>
                    <DryHerbCard src={kanna} herbTitle="Kanna Shred / Sceletium Tortusom"/>
                </div>

                <div className="row">

                    <DryHerbCard src={kava} herbTitle="Kava Extract / Piper Methysticum"/>
                    <DryHerbCard src={dagga} herbTitle="Wild Dagga (Lions Tail) / Leonotis Leonurus"/>
                    <DryHerbCard src={wormwood} herbTitle="Wormwood / Artemisia"/>

                </div>

                <div className="row">

                    <DryHerbCard src={palo} herbTitle="Palo Azul - Detox Cheese"/>
                    <DryHerbCard src={whiteWillow} herbTitle="White Willow Bark Powder"/>
                    <DryHerbCard src={marshmallow} herbTitle="Marshmallow Root Powder / Althaea Officinalis"/>

                </div>

                <div className="row">

                    <DryHerbCard src={dreamHerb} herbTitle="Calea Zacatachichi / Calea Ternifolia"/>
                    <DryHerbCard src={ilex} herbTitle="Ilex Guayusa"/>
                    <DryHerbCard src={lavender} herbTitle="Lavendar Petals / Lamianceae Lavendula"/>

                </div>

                <div className="row">

                    <DryHerbCard src={maitake} herbTitle="Maitake Mushroom"/>
                    <DryHerbCard src={matcha} herbTitle="Matcha Green Tea"/>
                    <DryHerbCard src={reishi} herbTitle="Reishi Mushroom / Lingzhi"/>

                </div>
                    
                <div className="row">

                    <DryHerbCard src={skullCap} herbTitle="Blue Skull Cap Leaf / Scutellaria Laterflora"/>
                    <DryHerbCard src={tumeric} herbTitle="Tumeric Capsule / Tumeric Powder"/>
                    <DryHerbCard src={valerian} herbTitle="Valerian / Valeriana Officinalis"/>

                </div>

                <div className='row'>

                    <DryHerbCard src={whiteSage} herbTitle="White Sage"/>
                
                </div>
                 
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default DryHerbs;
