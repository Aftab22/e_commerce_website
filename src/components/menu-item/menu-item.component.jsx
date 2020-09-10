import React from "react";
import "./menu-item.styles.scss";

function Menuitem({ title, imageUrl, size }) {
  return (
    <>
      <div className={`menu-item ${size}`}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="item-content">
          <h1 className="item-title">{title.toUpperCase()}</h1>
          <span className="item-subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
}

export default Menuitem;
