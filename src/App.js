import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { withRouter } from "react-router-dom";
//redux-step-8.1 import action you want to trigger in the component
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
//auth
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  unSubscribeFromGoogleAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    //we subscribe to this method onAuthStateChanged, we always listen to it for sign in/sign out changes
    // "userAuth" is the user datails object that firebase stores in indexed db after successful sign in
    this.unSubscribeFromGoogleAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          //on successfull google sign in , we get "userAuth" object and pass it to get stored in "db"
          //on succsfulll db entry we recieve a userRef object with user details stored in db.
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapshot) => {
            //redux-step-12 call/dispatch/trigger action with param
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        } else {
          setCurrentUser(userAuth);
          this.props.history.push("/signin");
        }
      }
    );
  }

  //as soon as component mounts , we listen for auth state changes
  //once the component unmpunts we need to stop listening(unsubscribe)
  componentWillUnmount() {
    this.unSubscribeFromGoogleAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          {/*do not allow user to go on sign in page if already signed in*/}
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
//redux-step-8.2 create mapDispatchToProps pass actions to component
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
//redux-step-8.3 pass mapStateToProps and  mapDispatchToProps to connectHOC
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
