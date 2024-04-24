import React from "react";
import "./style.scss";

function Dropdown({ label, labelValues = [{ label: "", value: "" }] }) {
  return (
    <div className="dropdown-container">
      <span className="label">{label}</span>
      <select className="select">
        {labelValues.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
