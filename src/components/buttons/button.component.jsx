import React from "react";
import "./button.styles.scss";

function Button({ children, googleSignInButton_true, ...otherProps }) {
  return (
    <button
      className={`custom-button ${
        googleSignInButton_true ? "google-sign-in" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
