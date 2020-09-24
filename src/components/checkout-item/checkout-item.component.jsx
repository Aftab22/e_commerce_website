import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
  decreaseItemCount,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

function CheckoutItem({ cartItem, removeItem, addItem, decreaseItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        <span role="img">&#10060;</span>
      </div>
    </div>
  );
}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItemToCart(item)),
  decreaseItem: (item) => dispatch(decreaseItemCount(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
