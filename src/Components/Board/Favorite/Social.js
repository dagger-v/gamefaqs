import React from "react";

const Social = () => {
  return (
    <>
      <div className="board__main-fave">
        <span>Social Boards</span>
      </div>

      <div className="gfaqs-announcements">
        <a href="/currentevents" className="favorite__board">
          Current Events
        </a>
        <span className="favorite__description">
          My CSS skills are finally improving.
        </span>
      </div>
    </>
  );
};

export default Social;
