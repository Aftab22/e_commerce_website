import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";

import "./header.styles.scss";

function Header() {
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
      </div>
    </div>
  );
}

export default Header;
