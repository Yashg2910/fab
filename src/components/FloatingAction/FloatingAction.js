import React, { useState } from "react";
import "./style.scss";
import FabButton from "../FabButton/FabButton";
import DocumentIcon from "../../assets/icons/document.png";
import CloseIcon from "../../assets/icons/close.png";
import FeedbackIcon from "../../assets/icons/feedback.png";
import WriteIcon from "../../assets/icons/write.png";
import LikesIcon from "../../assets/icons/likes.png";
import FlagIcon from "../../assets/icons/flag.png";

import FabMenuItem from "../FabMenuItem/FabMenuItem";

function shouldShowOption(allowedOptions, optionType) {
  return allowedOptions.includes(optionType);
}

const fabMenuItems = [
  {
    key: "issue",
    title: "Report an Issue",
    iconUrl: FlagIcon,
  },
  {
    key: "feedback",
    title: "Share Feedback",
    iconUrl: LikesIcon,
  },
  {
    key: "suggestions",
    title: "Give Suggestions",
    iconUrl: WriteIcon,
  },
  {
    key: "contactUs",
    title: "Contact Us",
    iconUrl: FeedbackIcon,
  },
];

function FloatingAction({
  optionsToShow = ["contactUs", "suggestions", "feedback", "issue"],
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredOptions = fabMenuItems.filter((option) =>
    shouldShowOption(optionsToShow, option.key)
  );

  return (
    <div className="floating-action-container">
      {isMenuOpen && (
        <>
          {filteredOptions.map(({ key, title, iconUrl }, idx) => (
            <FabMenuItem
              key={key}
              title={title}
              iconUrl={iconUrl}
              onPress={() => {}}
            />
          ))}
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
