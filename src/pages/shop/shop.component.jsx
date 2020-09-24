import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

function ShopPage({ collections }) {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   collections: state.shop.collections,
// });

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
