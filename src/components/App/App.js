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
import { GlobalStyle } from '../../global.styles';

// Pages
import HomePage from '../../pages/homepage/homepage.component';
import AboutPage from '../../pages/about/about-page.component';
import ContactPage from '../../pages/contact/contact.component';
import DryHerbs from '../../pages/dry-herbs/dry-herbs.component';
import BulkTea from '../../pages/bulk-tea/bulk-tea.component';
import EssentialOils from '../../pages/essential-oils/essential-oils.component';
import Soaps from '../../pages/soaps/soaps.component';
import Jewelry from '../../pages/jewelry/jewelry.component';
import Sprays from '../../pages/sprays/sprays.component';
import CrystalsAndStones from '../../pages/crystals-and-stones/crystals-and-stones.component';
import SkateShopPage from '../../pages/skate-shop/skate-shop.component';
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Navbar from '../navbar/navbar.component';
import CheckoutPage from '../../pages/checkout/checkout-page.component';
import PrivacyPolicy from '../../pages/privacy-policy/privacy-policy.component';
import TermsAndConditions from '../../pages/terms-and-conditions/terms-and-conditions.component';
import Footer from '../footer/footer.component';

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
          <GlobalStyle />
            <Navbar/>
            <Switch>
                <Route path="/terms-and-conditions" component={TermsAndConditions} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route path="/shop/skate-shop" component={SkateShopPage} />
                <Route path="/shop/crystals-and-stones" component={CrystalsAndStones} />
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