import React, { useState } from "react";
import "./style.scss";
import FabButton from "../FabButton/FabButton";
import DocumentIcon from "../../assets/icons/document.png";
import CloseIcon from "../../assets/icons/close.png";
import FeedbackIcon from "../../assets/icons/feedback.png";
import WriteIcon from "../../assets/icons/write.png";
import LikesIcon from "../../assets/icons/likes.png";
import FlatIcon from "../../assets/icons/flag.png";

import FabMenuItem from "../FabMenuItem/FabMenuItem";

function shouldShowOption(allowedOptions, optionType) {
  return allowedOptions.includes(optionType);
}

function FloatingAction({
  optionsToShow = ["contactUs", "sugestions", "feedback", "issue"],
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="floating-action-container">
      {isMenuOpen && (
        <>
          {/* Menu Items */}
          {shouldShowOption(optionsToShow, "issue") && (
            <FabMenuItem title={"Report an Issue"} iconUrl={FeedbackIcon} />
          )}
          {shouldShowOption(optionsToShow, "feedback") && (
            <FabMenuItem title={"Share Feedback"} iconUrl={WriteIcon} />
          )}

          {shouldShowOption(optionsToShow, "sugestions") && (
            <FabMenuItem title={"Give Suggestion"} iconUrl={LikesIcon} />
          )}

          {shouldShowOption(optionsToShow, "contactUs") && (
            <FabMenuItem title={"Contact Us"} iconUrl={FlatIcon} />
          )}
        </>
      )}

      <FabButton
        onIconPress={() => setIsMenuOpen((prev) => !prev)}
        iconUrl={!isMenuOpen ? DocumentIcon : CloseIcon}
      />
    </div>
  );
}

export default FloatingAction;
