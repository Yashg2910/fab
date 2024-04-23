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

function FloatingAction() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="floating-action-container">
      {isMenuOpen && (
        <>
          {/* Menu Items */}
          <FabMenuItem title={"Report an Issue"} iconUrl={FeedbackIcon} />
          <FabMenuItem title={"Share Feedback"} iconUrl={WriteIcon} />
          <FabMenuItem title={"Give Suggestion"} iconUrl={LikesIcon} />
          <FabMenuItem title={"Contact Us"} iconUrl={FlatIcon} />
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
