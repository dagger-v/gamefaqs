import React from "react";

const Community = () => {
  return (
    <>
      <div className="board__main-fave">
        <span>Community Boards</span>
      </div>

      <div className="gfaqs-announcements bottom">
        <a href="/board/the-fam" className="favorite__board">
          The Fam
        </a>
        <span className="favorite__description">Card collections topic</span>
      </div>
    </>
  );
};

export default Community;
