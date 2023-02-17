import React from "react";

import Header from "../Header/Header";

import "./Home.css";

import HomeJump from "./HomeJump";
import HomePopular from "./HomePopular";
import HomePoll from "./HomePoll";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main__content">
        <div className="main__content-games">
          <div className="main__content-games-title">
            <span className="title">Looking for help with a game?</span>
          </div>
          <div className="main__content-games-ask-qa">
            <span>
              Ask our experts for help with a game. Questions are usually
              answered in under an hour!
            </span>
            <button className="main__content-qa-btn">Ask A Question</button>
          </div>
          <HomeJump />
          <HomePopular />
        </div>
        <HomePoll />
      </div>
    </div>
  );
};

export default Home;
