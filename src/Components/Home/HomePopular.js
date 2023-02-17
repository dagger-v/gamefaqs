import React from "react";

import "./HomePopular.css";

import CE1 from "../../Images/gfaqs-popular-01.png";
import CE2 from "../../Images/gfaqs-popular-02.png";
import CE3 from "../../Images/gfaqs-popular-03.png";
import CE4 from "../../Images/gfaqs-popular-04.png";
import CE5 from "../../Images/gfaqs-popular-05.png";
import CE6 from "../../Images/gfaqs-popular-06.png";
import CE7 from "../../Images/gfaqs-popular-07.png";
import CE8 from "../../Images/gfaqs-popular-08.png";
import CE9 from "../../Images/gfaqs-popular-09.png";
import CE10 from "../../Images/gfaqs-popular-10.png";

const HomePopular = () => {
  return (
    <div className="main__content-popular">
      <div className="main__content-popular-games-title">
        <span className="popular-games-title">Popular Games</span>
      </div>
      <div className="main__content-popular-games">
        <ol className="main__content-popular-content">
          <li className="main__content-popular-board">
            <div className="main__content-popular-num">1</div>
            <div className="main__content-popular-img">
              <img src={CE1} alt="CE"></img>
            </div>
            <div className="main__content-popular-topic">
              <span className="topic">The Elder Scrolls V: Skyrim</span>
              <span className="post">PC XBSX PS5 NS</span>
            </div>
          </li>

          <li className="main__content-popular-board">
            <div className="main__content-popular-num">2</div>
            <div className="main__content-popular-img">
              <img src={CE2} alt="CE"></img>
            </div>
            <div className="main__content-popular-topic">
              <span className="topic">
                The Legend of Zelda: Breath of the Wild
              </span>
              <span className="post">NS</span>
            </div>
          </li>

          <li className="main__content-popular-board">
            <div className="main__content-popular-num">3</div>
            <div className="main__content-popular-img">
              <img src={CE3} alt="CE"></img>
            </div>
            <div className="main__content-popular-topic">
              <span className="topic">Fire Emblem Engage</span>
              <span className="post">NS</span>
            </div>
          </li>

          <li className="main__content-popular-board">
            <div className="main__content-popular-num">4</div>
            <div className="main__content-popular-img">
              <img src={CE4} alt="CE"></img>
            </div>
            <div className="main__content-popular-topic">
              <span className="topic">Genshin Impact</span>
              <span className="post">PC iOS PS5 NS</span>
            </div>
          </li>

          <li className="main__content-popular-board">
            <div className="main__content-popular-num">5</div>
            <div className="main__content-popular-img">
              <img src={CE5} alt="CE"></img>
            </div>
            <div className="main__content-popular-topic">
              <span className="topic">Persona 4 Golden</span>
              <span className="post">PC XBSX PS5 NS</span>
            </div>
          </li>

          <li className="main__content-popular-board">
            <div className="main__content-popular-num">6</div>
            <div className="main__content-popular-img">
              <img src={CE6} alt="CE"></img>
            </div>
            <div className="main__content-popular-topic">
              <span className="topic">Shin Megami Tensei: Persona 3</span>
              <span className="post">PC XBSX PS5 NS</span>
            </div>
          </li>

          <li className="main__content-popular-board">
            <div className="main__content-popular-num">7</div>
            <div className="main__content-popular-img">
              <img src={CE7} alt="CE"></img>
            </div>
            <div className="main__content-popular-topic">
              <span className="topic">Pokemon Scarlet</span>
              <span className="post">NS</span>
            </div>
          </li>

          <li className="main__content-popular-board">
            <div className="main__content-popular-num">8</div>
            <div className="main__content-popular-img">
              <img src={CE8} alt="CE"></img>
            </div>
            <div className="main__content-popular-topic">
              <span className="topic">The Witcher 3: Wild Hunt</span>
              <span className="post">PC XBSX PS5 NS</span>
            </div>
          </li>

          <li className="main__content-popular-board">
            <div className="main__content-popular-num">9</div>
            <div className="main__content-popular-img">
              <img src={CE9} alt="CE"></img>
            </div>
            <div className="main__content-popular-topic">
              <span className="topic">Final Fantasy XIV</span>
              <span className="post">PC PS5</span>
            </div>
          </li>

          <li className="main__content-popular-board">
            <div className="main__content-popular-num">10</div>
            <div className="main__content-popular-img">
              <img src={CE10} alt="CE"></img>
            </div>
            <div className="main__content-popular-topic">
              <span className="topic">Red Dead Redemption 2</span>
              <span className="post">PC XONE PS4</span>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HomePopular;
