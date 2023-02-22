import React from "react";
import { useParams } from "react-router-dom";

import Header from "../Header/Header";

import "../Forum/Forum.css";

const MessageDetail = () => {
  const { id } = useParams();

  return (
    <div>
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
        <div className="forum__topic-user">
          <span className="forum__topic-name">Poorly ▼</span>
          <span className="forum__topic-date">2/11/2023 10:49:36 PM</span>
          <span className="forum__topic-count">#1</span>
        </div>
        <div className="forum__topic-post">
          <span></span>
        </div>
        <div className="forum__topic-signature">
          <span>---</span>
          <span>MAH DOGS ARE HONGRAY</span>
        </div>
        <div className="forum__topic-new-post">
          <textarea rows="10" cols="100"></textarea>
        </div>
        <button className="forum__msg-btn">Post New Message</button>
      </div>
    </div>
  );
};

export default MessageDetail;
