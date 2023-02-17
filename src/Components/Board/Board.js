import React from "react";

import Header from "../Header/Header";
import BoardInfo from "./BoardInfo";
import Favorite from "./Favorite/Favorite";

import "./Board.css";

const Board = () => {
  return (
    <div>
      <Header />
      <BoardInfo />
      <div className="board__main-content">
        <div>
          <span className="board-title">GameFAQs Message Boards</span>
        </div>
        <div className="board__your-favorite">
          <Favorite />
        </div>
      </div>
    </div>
  );
};

export default Board;
