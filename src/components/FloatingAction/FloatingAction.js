import React from "react";
import "./style.scss";
import FabButton from "../FabButton/FabButton";
import DocumentIcon from "../../assets/icons/document.png";

function FloatingAction() {
  return (
    <div className="floating-action-container">
      <FabButton iconUrl={DocumentIcon} />
    </div>
  );
}

export default FloatingAction;
