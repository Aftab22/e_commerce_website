import React from "react";
import "./button.styles.scss";
import { ReactComponent as GoogleIcon } from "../../assets/icons8-google.svg";

function Button({ children, googleSignInButton_true, img, ...otherProps }) {
  return (
    <button
      className={`custom-button ${
        googleSignInButton_true ? "google-sign-in" : ""
      }`}
      {...otherProps}
    >
      {googleSignInButton_true ? (
        <GoogleIcon
          style={{
            width: "30px",
            height: "20px",
            float: "left",
            marginLeft: "-10px",
          }}
        />
      ) : null}
      {children}
    </button>
  );
}

export default Button;
