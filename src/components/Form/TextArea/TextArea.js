import React from "react";
import "./style.scss";

function TextArea({ label, onChange, isMandatory }) {
  return (
    <div className="textarea-container">
      <span className="label">
        {label} {isMandatory ? <span className="mandatory">*</span> : ""}
      </span>
      <textarea
        className="textarea-input"
        rows="4"
        cols="50"
        placeholder="Write here..."
      />
    </div>
  );
}

export default TextArea;
