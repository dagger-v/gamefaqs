import React from "react";

const Game = () => {
  return (
    <>
      <span className="fave-title blue">Your Favorite Boards</span>
      <div className="board__main-board">
        <span>Board</span>
      </div>
      <div className="board__main-fave">
        <span>Favorite Boards</span>
      </div>
      <div className="gfaqs-announcements">
        <span className="favorite__board">GameFAQs Annoucements</span>
        <span className="favorite__description">
          Site Search Rollup/Updates
        </span>
      </div>
      <div className="board__main-board">
        <span>Game Boards</span>
      </div>
      <div className="gfaqs-announcements">
        <span className="favorite__board">Animal Crossing: New Horizons</span>
        <span className="favorite__description">
          One thing they should add in the next game.
        </span>
      </div>

      <div className="gfaqs-announcements">
        <span className="favorite__board">Final Fantasy IX</span>
        <span className="favorite__description">
          Final Fantasy IX riddles part 55 (spoilers)
        </span>
      </div>

      <div className="gfaqs-announcements">
        <span className="favorite__board">Pokemon Scarlet</span>
        <span className="favorite__description">
          So do you think Mega is coming back?
        </span>
      </div>

      <div className="gfaqs-announcements">
        <span className="favorite__board">World of Warcraft</span>
        <span className="favorite__description">Sub count back up?</span>
      </div>
    </>
  );
};

export default Game;
