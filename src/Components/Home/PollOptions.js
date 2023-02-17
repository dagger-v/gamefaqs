import React from "react";

const PollOptions = () => {
  return (
    <div className="home__poll-choice">
      <div className="home__poll-answer">
        <input type="checkbox" id="ffvi" name="ffvi" />
        <label for="ffvi">Final Fantasy VI</label>
      </div>

      <div className="home__poll-answer">
        <input type="checkbox" id="ffvii" name="ffvii" />
        <label for="ffvii">Final Fantasy VII</label>
      </div>

      <div className="home__poll-answer">
        <input type="checkbox" id="ffviii" name="ffviii" />
        <label for="ffviii">Final Fantasy VIII</label>
      </div>

      <div className="home__poll-answer">
        <input type="checkbox" id="ffix" name="ffix" checked />
        <label for="ffix">Final Fantasy IX</label>
      </div>

      <div className="home__poll-answer">
        <input type="checkbox" id="ffx" name="ffx" />
        <label for="ffx">Final Fantasy X</label>
      </div>
    </div>
  );
};

export default PollOptions;
