import React from "react";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

function ShopPage() {
  return (
    <div className="shop-page">
      <CollectionsOverview />
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
