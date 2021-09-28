import React from 'react';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import { 
    BrowserRouter as Router, 
    Switch, Route 
} from 'react-router-dom';


import './App.css';
import DryHerbs from '../pages/DryHerbs';
import BulkTea from '../pages/BulkTea';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
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
