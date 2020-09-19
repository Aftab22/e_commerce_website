import React from "react";
import Button from "../buttons/button.component";
import "./cart-dropdown.styles.scss";

function Cart() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default Cart;
