import React from "react";
import "./menu-item.styles.scss";

function Menuitem({ title, imageUrl, size }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={`menu-item ${size}`}
      >
        <div className="item-content">
          <h1 className="item-title">{title}</h1>
          <span className="item-subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
}

export default Menuitem;
