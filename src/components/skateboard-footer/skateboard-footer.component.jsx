import React from 'react';

import alien from '../../assets/skateboard-logos/alien_workshop_logo.png';
import antihero from '../../assets/skateboard-logos/antihero-logo.png';
import dgk from '../../assets/skateboard-logos/DGK_logo.png';
import flip from '../../assets/skateboard-logos/Flip_logo.jpg';
import foundation from '../../assets/skateboard-logos/foundation_logo.png';
import powell from '../../assets/skateboard-logos/powell_logo.webp';
import santacruz from '../../assets/skateboard-logos/santa_cruz_logo.png';
import sk8mafia from '../../assets/skateboard-logos/sk8mafia_logo.png';
import techne from '../../assets/skateboard-logos/techne_logo.png';

function SkateboardFooter() {
    return (
        <div className="container border-top">
            <div className="row d-flex row-one">
                <img className="skate-logo" src={alien} alt="Alien Workshop Skateboards Logo"/>
                <img className="skate-logo" src={antihero} alt="Anti-Hero Skateboards Logo"/>
                <img className="skate-logo" src={dgk} style={{ backgroundColor: 'black' }} alt="DGK Skateboards Logo"/>
                <img className="skate-logo" src={techne} style={{ backgroundColor: 'black' }} alt="Techne Skateboards Logo"/>
            </div>
            <div className="row d-flex row-two">
                <img className="skate-logo" src={sk8mafia} style={{ backgroundColor: 'black' }} alt="Skate Mafia Skateboards Logo"/>
                <img className="skate-logo" src={flip} alt="Flip Skateboards Logo"/>
                <img className="skate-logo" src={foundation} alt="Foundation Skateboards Logo"/>
                <img className="skate-logo" src={santacruz} alt="Santa Cruz Skateboards Logo"/>
                <img className="skate-logo" src={powell} alt="Powell Peralta Skateboards Logo"/>
            </div>
        </div>
    )
}

export default SkateboardFooter;