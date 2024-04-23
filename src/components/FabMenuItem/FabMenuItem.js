import React from "react";
import FabButton from "../FabButton/FabButton";
import "./style.scss";

function FabMenuItem({
  onPress,
  iconUrl,
  title,
  showLabel = true,
  isSelected = false,
}) {
  return (
    <div
      className={`fab-menu-item-container ${
        isSelected && "fab-menu-item-container-selected"
      }
      ${!showLabel && "fab-menu-item-container-horizontal"}`}
      onClick={onPress}
    >
      {showLabel && <span className="label">{title}</span>}
      <FabButton iconUrl={iconUrl} />
    </div>
  );
}

export default FabMenuItem;
