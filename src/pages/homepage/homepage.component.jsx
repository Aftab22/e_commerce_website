import React from "react";
import ProductsMenu from "../../components/products-menu/products-menu.component";

import "./homepage.styles.scss";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <ProductsMenu />
      </div>
    </>
  );
}

export default HomePage;
