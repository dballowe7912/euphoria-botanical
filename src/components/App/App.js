import React from 'react';
import { 
    Switch, Route 
} from 'react-router-dom';

// CSS
import './App.css';

// Pages
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ContactPage from '../../pages/ContactPage';
import DryHerbs from '../../pages/DryHerbs';
import BulkTea from '../../pages/BulkTea';
import EssentialOils from '../../pages/EssentialOils';
import Soaps from '../../pages/Soaps';
import Jewelry from '../../pages/Jewelry';
import Sprays from '../../pages/Sprays';
import CrystalsAndStones from '../../pages/CrystalsAndStones';
import SkateShopPage from '../../pages/SkateShopPage';


const App = () => (
    <div>
        <Switch>
            <Route path="/skateboard-shop" component={SkateShopPage} />
            <Route path="/crystals-and-stones" component={CrystalsAndStones} />
            <Route path="/sprays" component={Sprays} />
            <Route path="/jewelry" component={Jewelry}/>
            <Route path="/soaps" component={Soaps} />
            <Route path="/oils" component={EssentialOils} />
            <Route path="/teas" component={BulkTea} />
            <Route path="/herbs" component={DryHerbs} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/" component={HomePage} />
        </Switch>
    </div>
)

export default App;
