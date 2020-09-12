import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

//auth
import { auth } from "./firebase/firebase.utils";

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
    //we subscribe to this method , we always listen to it for sign in changes
    // user is the user detaisl that firebase stores in indexed db after successful sign in
    this.unSubscribeFromGoogleAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
    //^ auth.onAuthStateChanged() does get exectuted and listening starts.
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

export default App;
