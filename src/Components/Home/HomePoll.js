import React from "react";

import "./HomePoll.css";
import PollOptions from "./PollOptions";

const HomePoll = () => {
  return (
    <div className="main__content-poll">
      <fieldset>
        <div className="home__poll-content">
          <div className="home__poll-main">
            <span className="home__poll-title">Poll of the Day</span>
            <span className="home__poll-question">
              Which of these Final Fantasy games is the best?
            </span>
            <span className="home__poll-results">View Results</span>
          </div>
          <PollOptions />
          <button className="home__poll-btn">Submit Vote</button>
        </div>
      </fieldset>
    </div>
  );
};

export default HomePoll;
