import React, { Component } from 'react';
import { 
    Switch, Route, Redirect 
} from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user-actions';

// CSS
import './App.scss';

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
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Navbar from '../Navbar/Navbar';

class App extends Component {

    unsubscribeFromAuth = null

    componentDidMount() {

      const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
              const userRef = await createUserProfileDocument(userAuth);
      
              userRef.onSnapshot(snapShot => {
                setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
                });
              });
            }
            else {
              setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
        <div className="app bg-light">
            <Navbar/>
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
                <Route path='/signin' exact render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />
            </Switch>
        </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
