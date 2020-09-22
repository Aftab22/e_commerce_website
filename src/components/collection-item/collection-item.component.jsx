import React from "react";
import Button from "../../components/buttons/button.component";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

function CollectionItem({ item, addItemToCart }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={() => addItemToCart(item)}>
        ADD TO CART
      </Button>
    </div>
  );
}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
