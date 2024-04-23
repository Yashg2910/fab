import React from "react";
import FabButton from "../FabButton/FabButton";
import "./style.scss";

function FabMenuItem({ onPress, iconUrl, title, showLabel = true }) {
  return (
    <div className="fab-menu-item-container">
      <span className="label">{title}</span>
      <FabButton iconUrl={iconUrl} />
    </div>
  );
}

export default FabMenuItem;
