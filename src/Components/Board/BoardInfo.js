import React from "react";

import "./BoardInfo.css";

const BoardInfo = () => {
  return (
    <div className="board__information">
      <span className="board-info-title blue">Board Information</span>
      <div className="board__information-content">
        <span className="board__information-account">
          Your Account: <button>SomeLikeItHoth(37)</button>
        </span>
        <span>
          Please read and follow our
          <span className="blue-text"> User Content Rules</span>, and see our
          <span className="blue-text"> Help Section</span> for additional
          information.
        </span>
        <span>
          There are approximately <span className="bold">408</span> registered
          users currently using the message boards.
        </span>
      </div>
    </div>
  );
};

export default BoardInfo;
