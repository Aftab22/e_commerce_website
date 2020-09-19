import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";
//import auth for signout functionality
import { auth } from "../../firebase/firebase.utils";
//redux-step-7.1 add redux to component
//connect is a HOC that modifies our component with access to store and redux stuff
import { connect } from "react-redux";
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

//redux-step-7.2 connect component to root-reducer
//mapStateToProps allows us to access the store i.e root-reducer i.e global state
//root-reducer has a property "user" which has reducer. that reducer has a property current user
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

//redux-step-7.3 using connect by passing mapStateToProps and Component
export default connect(mapStateToProps)(Header);
