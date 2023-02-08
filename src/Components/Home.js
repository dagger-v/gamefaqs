import Header from "./Header";
import HomePoll from "./HomePoll";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main__content">
        <div className="main__content-games">
          <span className="title">Looking for help with a game?</span>
          <div>
            <span>
              Ask our experts for help with a game. Questions are usually
              answered in under an hour!
            </span>
            <button className="main__content-qa-btn">Ask A Question</button>
          </div>
        </div>
        <div className="main__content-poll"></div>
        <HomePoll />
      </div>
    </div>
  );
};

export default Home;
