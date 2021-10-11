import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, Route 
} from 'react-router-dom';

// CSS
import './App.css';

// Pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import DryHerbs from '../pages/DryHerbs';
import BulkTea from '../pages/BulkTea';
import EssentialOils from '../pages/EssentialOils';
import Soaps from '../pages/Soaps';
import Jewelry from '../pages/Jewelry';
import Sprays from '../pages/Sprays';
import CrystalsAndStones from '../pages/CrystalsAndStones';


const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/crystals-and-stones">
                        <CrystalsAndStones/>
                    </Route>
                    <Route path="/sprays">
                        <Sprays/>
                    </Route>
                    <Route path="/jewelry">
                        <Jewelry/>
                    </Route>
                    <Route path="/soaps">
                        <Soaps/>
                    </Route>
                    <Route path="/oils">
                        <EssentialOils/>
                    </Route>
                    <Route path="/teas">
                        <BulkTea/>
                    </Route>
                    <Route path="/herbs">
                        <DryHerbs/>
                    </Route>
                    <Route path="/about">
                        <AboutPage/>
                    </Route>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
