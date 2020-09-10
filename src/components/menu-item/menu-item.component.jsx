import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

function Menuitem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <>
      <div
        className={`menu-item ${size}`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
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

export default withRouter(Menuitem);
