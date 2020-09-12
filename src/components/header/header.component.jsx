import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";
//import auth for signout functionality
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo style={{ height: "70px", width: "70px" }} />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
