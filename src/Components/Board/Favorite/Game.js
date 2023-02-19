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
        <a href="/board/gamefaqs-announcements" className="favorite__board">
          GameFAQs Announcements
        </a>
        <span className="favorite__description">
          Site Search Rollup/Updates
        </span>
      </div>
      <div className="board__main-board">
        <span>Game Boards</span>
      </div>
      <div className="gfaqs-announcements">
        <a
          href="/board/animal-crossing-new-horizons"
          className="favorite__board"
        >
          Animal Crossing: New Horizons
        </a>
        <span className="favorite__description">
          One thing they should add in the next game.
        </span>
      </div>

      <div className="gfaqs-announcements">
        <a href="/board/final-fantasy-ix" className="favorite__board">
          Final Fantasy IX
        </a>
        <span className="favorite__description">
          Final Fantasy IX riddles part 55 (spoilers)
        </span>
      </div>

      <div className="gfaqs-announcements">
        <a href="/board/pokemon-scarlet" className="favorite__board">
          Pokemon Scarlet
        </a>
        <span className="favorite__description">
          So do you think Mega is coming back?
        </span>
      </div>

      <div className="gfaqs-announcements">
        <a href="/board/world-of-warcraft" className="favorite__board">
          World of Warcraft
        </a>
        <span className="favorite__description">Sub count back up?</span>
      </div>
    </>
  );
};

export default Game;
