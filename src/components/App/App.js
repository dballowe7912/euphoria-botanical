import React, { Component } from 'react';
import { 
    Switch, Route, Redirect 
} from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user-actions';

// Reselect
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

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
import CheckoutPage from '../../pages/checkout/CheckoutPage';
import Footer from '../Footer/Footer';

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
      console.log(this.props)
      return (
        <div className="app bg-light">
            <Navbar/>
            <Switch>
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route path="/shop/skate-shop" component={SkateShopPage} />
                <Route path="/crystals-and-stones" component={CrystalsAndStones} />
                <Route path="/sprays" component={Sprays} />
                <Route path="/shop/jewelry" component={Jewelry}/>
                <Route path="/shop/soaps" component={Soaps} />
                <Route path="/shop/essential-oils" component={EssentialOils} />
                <Route path="/shop/bulk-tea" component={BulkTea} />
                <Route path="/shop/dry-herbs" component={DryHerbs} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path='/signin' exact render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />
                <Route exact path="/" component={HomePage} />
            </Switch>
            <Footer />
        </div>
      )
    }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

// https://github.com/mars/create-react-app-buildpack.git buildpack