import React from "react";
import "./style.scss";

function Button({ text = "Click Me!" }) {
  return <div className="button">{text}</div>;
}

export default Button;
