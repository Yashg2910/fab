import React from "react";
import "./style.scss";

function TextInput({
  label,
  onChange,
  isMandatory,
  placeholder = "Enter your input",
}) {
  return (
    <div className="textinput-container">
      <span className="label">
        {label} {isMandatory ? <span className="mandatory">*</span> : ""}
      </span>
      <input className="input" rows="4" cols="50" placeholder={placeholder} />
    </div>
  );
}

export default TextInput;
