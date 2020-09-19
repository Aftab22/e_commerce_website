import React from "react";
import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingBag } from "../../assets/cart-icon.svg";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingBag className="shopping-icon" />
    <span className="item-count"></span>
  </div>
);

export default CartIcon;
