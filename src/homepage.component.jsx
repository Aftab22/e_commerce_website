import React from "react";
import "./homepage.styles.scss";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <div className="products-menu">
          <div className="menu-item">
            <div className="item-content">
              <h1 className="item-title">HATS</h1>
              <span className="item-subtitle">SHOP NOW</span>
            </div>
          </div>

          <div className="menu-item">
            <div className="item-content">
              <h1 className="item-title">JACKETS</h1>
              <span className="item-subtitle">SHOP NOW</span>
            </div>
          </div>

          <div className="menu-item">
            <div className="item-content">
              <h1 className="item-title">SNEAKERS</h1>
              <span className="item-subtitle">SHOP NOW</span>
            </div>
          </div>

          <div className="menu-item">
            <div className="item-content">
              <h1 className="item-title">WOMENS</h1>
              <span className="item-subtitle">SHOP NOW</span>
            </div>
          </div>

          <div className="menu-item">
            <div className="item-content">
              <h1 className="item-title">MENS</h1>
              <span className="item-subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
