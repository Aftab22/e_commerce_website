import React from "react";
import Button from "../buttons/button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";

function Cart({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(Cart);
