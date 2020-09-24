import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProductSections } from "../../redux/products-menu/products.selector";
import "./products-menu.styles.scss";

export function ProductsMenu({ products }) {
  return (
    <>
      <div className="products-menu">
        {products.map(({ id, ...menuItemProps }) => (
          <MenuItem key={id} {...menuItemProps} />
        ))}
      </div>
    </>
  );
}

// const mapStateToProps = ({ products: { sections } }) => ({
//   products: sections,
// });

const mapStateToProps = createStructuredSelector({
  products: selectProductSections,
});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ProductsMenu);
