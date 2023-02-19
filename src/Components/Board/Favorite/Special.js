import React from "react";

const Special = () => {
  return (
    <>
      <div className="board__main-fave">
        <span>Special Interest Boards</span>
      </div>

      <div className="gfaqs-announcements">
        <a href="/board/movies-at-the-theater" className="favorite__board">
          Movies: At the Theater
        </a>
        <span className="favorite__description">Rank the MCU movies</span>
      </div>

      <div className="gfaqs-announcements">
        <a href="/board/television-broadcast-tv" className="favorite__board">
          Television: Broadcast TV
        </a>
        <span className="favorite__description">
          Flash Season 9 Spoiler Discussion
        </span>
      </div>
    </>
  );
};

export default Special;
