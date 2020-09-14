import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { withRouter } from "react-router-dom";

//auth
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromGoogleAuth = null;

  componentDidMount() {
    //we subscribe to this method onAuthStateChanged, we always listen to it for sign in/sign out changes
    // "userAuth" is the user datails object that firebase stores in indexed db after successful sign in
    this.unSubscribeFromGoogleAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          //on successfull google sign in , we get "userAuth" object and pass it to get stored in "db"
          //on succsfulll db entry we recieve a userRef object with user details stored in db.
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapshot) => {
            this.setState(
              {
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data(),
                },
              },
              () => this.props.history.push("/")
            );
          });
        } else {
          this.setState({ currentUser: null }, () =>
            this.props.history.push("/signin")
          );
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
