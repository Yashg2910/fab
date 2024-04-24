import React from "react";
import "./style.scss";
import Dropdown from "../Form/Dropdown/Dropdown";
import TextArea from "../Form/TextArea/TextArea";
import TextInput from "../Form/TextInput/TextInput";
import Button from "../Form/Button/Button";

function FabCard() {
  return (
    <div className="fab-card-container">
      <div className="heading">
        Let us know about the Issue you are facing right now!
      </div>
      <div className="content">
        <Dropdown
          label="Choose a section"
          labelValues={[
            { label: "Interview Questions", value: "Interview Questions" },
          ]}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <TextArea label={"Describe the issue in details"} isMandatory />
        <TextInput
          label="Enter your email to recieve update"
          placeholder="Enter your Email"
        />
        <Button />
      </div>
    </div>
  );
}

export default FabCard;
