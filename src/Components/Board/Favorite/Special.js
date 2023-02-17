import React from "react";

const Special = () => {
  return (
    <>
      <div className="board__main-fave">
        <span>Special Interest Boards</span>
      </div>

      <div className="gfaqs-announcements">
        <span className="favorite__board">Movies: At the Theater</span>
        <span className="favorite__description">Rank the MCU movies</span>
      </div>

      <div className="gfaqs-announcements">
        <span className="favorite__board">Television: Broadcast TV</span>
        <span className="favorite__description">
          Flash Season 9 Spoiler Discussion
        </span>
      </div>
    </>
  );
};

export default Special;
