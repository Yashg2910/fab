import React from "react";
import "./style.scss";

function FabButton({ iconUrl, onIconPress = () => {} }) {
  return (
    <div className="fab-button-container" onClick={onIconPress}>
      <img src={iconUrl} alt="icon" />
    </div>
  );
}

export default FabButton;
