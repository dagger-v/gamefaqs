import React from "react";

import Header from "../../Header/Header";

import "../Forum.css";

const AnimeOpenings = () => {
  return (
    <div>
      <Header />
      <div className="forum__main-content">
        <div className="forum__user-info">
          <span className="forum__title">
            Skipping anime opening is not the way to go
          </span>
          <span className="forum__topic">Current Events</span>
        </div>
        <div className="forum__main-info">
          <a href="/" className="forum__a-user">
            SomeLikeItHoth (37) ▼
          </a>
          <a href="/currentevents" className="forum__a-board">
            Topic List
          </a>
          <a href="/" className="forum__a-topic">
            Post New Message
          </a>
        </div>
        <div className="forum__topic-user favorite top">
          <span className="forum__topic-name">Poorly ▼</span>
          <span className="forum__topic-date">2/11/2023 10:49:36 PM</span>
          <span className="forum__topic-count">#1</span>
        </div>
        <div className="forum__topic-post">
          <span>I don't understand why some people do such a thing</span>
        </div>
        <div className="forum__topic-signature">
          <span>---</span>
          <span>MAH DOGS ARE HONGRAY</span>
        </div>

        <div className="forum__topic-user self">
          <span className="forum__topic-name">SomeLikeItHoth ▼</span>
          <span className="forum__topic-date">2/11/2023 11:05:38 PM</span>
          <span className="forum__topic-count">#2</span>
        </div>
        <div className="forum__topic-post">
          <span>Anime openings sets the mood famalam.</span>
        </div>
        <div className="forum__topic-signature">
          <span>---</span>
          <span>FAM FOREVER</span>
        </div>

        <div className="forum__topic-user favorite">
          <span className="forum__topic-name">Poorly ▼</span>
          <span className="forum__topic-date">2/11/2023 11:06:15 PM</span>
          <span className="forum__topic-count">#3</span>
        </div>
        <div className="forum__topic-post">
          <span>This</span>
        </div>
        <div className="forum__topic-signature">
          <span>---</span>
          <span>MAH DOGS ARE HONGRAY</span>
        </div>

        <div className="forum__topic-user">
          <span className="forum__topic-name">Hoodroar ▼</span>
          <span className="forum__topic-date">2/11/2023 11:07:03 PM</span>
          <span className="forum__topic-count">#4</span>
        </div>
        <div className="forum__topic-post">
          <span>Half of them are cringe tho.</span>
        </div>
        <div className="forum__topic-signature">
          <span>---</span>
          <span>sigless user logic</span>
        </div>
        <div className="forum__topic-new-post">
          <textarea rows="10" cols="100"></textarea>
        </div>
        <button className="forum__msg-btn">Post New Message</button>
      </div>
    </div>
  );
};

export default AnimeOpenings;
