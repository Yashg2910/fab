import React from "react";
import "./style.scss";

function FabButton({ iconUrl }) {
  return (
    <div className="fab-button-container">
      <img src={iconUrl} alt="icon" />
    </div>
  );
}

export default FabButton;
