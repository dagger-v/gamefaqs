import React from "react";

import "./HomeJump.css";

import CE1 from "../../Images/gfaqs-icon-01.png";
import CE2 from "../../Images/gfaqs-icon-02.png";
import CE3 from "../../Images/gfaqs-icon-03.png";
import CE4 from "../../Images/gfaqs-icon-04.png";

const HomeJump = () => {
  return (
    <div className="main__content-jump">
      <div className="main__content-jump-title">
        <span className="jump">Jump Back In...</span>
      </div>
      <div className="main__content-jump-content">
        <div className="main__content-jump-board">
          <img src={CE1} alt="CE"></img>
          <div className="main__content-jump-topic">
            <span className="topic">Current Events</span>
            <span className="post">My CSS skills are finally improving</span>
          </div>
        </div>

        <div className="main__content-jump-board">
          <img className="right" src={CE2} alt="CE"></img>
          <div className="main__content-jump-topic">
            <span className="topic">Fire Emblem Engage</span>
            <span className="post">Discuss the unit day one: Citrinne</span>
          </div>
        </div>
      </div>

      <div className="main__content-jump-content2">
        <div className="main__content-jump-board2">
          <img src={CE3} alt="CE"></img>
          <div className="main__content-jump-topic2">
            <span className="topic">Final Fantasy IX</span>
            <span className="post">Can you rig Dagger as the leader?</span>
          </div>
        </div>

        <div className="main__content-jump-board2">
          <img className="right" src={CE4} alt="CE"></img>
          <div className="main__content-jump-topic2">
            <span className="topic">Elden Ring</span>
            <span className="post">Early, high DPS, spirit ash summons?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeJump;
