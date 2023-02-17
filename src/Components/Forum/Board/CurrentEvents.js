import React, { useState } from "react";

import { format, parse } from "date-fns";

import Header from "../../Header/Header";

import "../Forum.css";

const ForumTopic = [
  {
    id: 1,
    title: "Skipping the anime opening is not the way to go",
    message: "test",
    author: "Poorly",
    count: 23,
    date: parse("2/13 2:09a", "M/dd h:mma", new Date()),
  },
  {
    id: 2,
    title: "Fire Emblem Engage: 4th Edition",
    message: "test",
    author: "Calwings",
    count: 58,
    date: parse("2/13 3:48a", "M/dd h:mma", new Date()),
  },
];

const CurrentEvents = () => {
  const [topic, setTopic] = useState(ForumTopic);

  const [title, setTitle] = useState();
  const [message, setMessage] = useState();

  const [show, setShow] = useState(false);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const addTopic = (e) => {
    e.preventDefault();
    setTopic([
      ...topic,
      {
        id: 4,
        title: title,
        message,
        author: "SomeLikeItHoth",
        count: 1,
        date: new Date(),
      },
    ]);
    setTitle("");
    setMessage("");
    setShow(false);
  };

  return (
    <div>
      <Header />
      <div className="forum__main-content">
        <div className="forum__main-topbar">
          <span className="forum__main-title">Current Events</span>
          <div className="forum__main-info">
            <a href="/" className="forum__a-user">
              SomeLikeItHoth (37) ▼
            </a>
            <a href="/" className="forum__a-board">
              Board List
            </a>
            <button
              href="/"
              className="forum__a-topic"
              onClick={() => setShow((currentShow) => !currentShow)}
            >
              New Topic
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th className="forum__bar-topic">Topic</th>
                <th>Created By</th>
                <th>Msgs</th>
                <th>Last Post</th>
              </tr>
            </thead>
            <tbody>
              {topic
                .sort((a, b) => b.date - a.date)
                .map(({ title, author, count, date }, index) => (
                  <tr>
                    <td className="forum__topic">
                      <a href="/anime">{title}</a>
                    </td>
                    <td>{author}</td>
                    <td className="forum__msg">{count}</td>
                    <td>{format(date, "M/dd h:mma")}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {show ? (
          <form onSubmit={addTopic} className="forum__topic-new-post">
            Create a topic title
            <label htmlFor="title">
              <input
                id="title"
                name="title"
                value={title}
                onChange={handleTitle}
                size="90"
                minLength="5"
                maxLength="80"
              ></input>
            </label>
            Write your message
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessage}
                rows="10"
                cols="100"
              ></textarea>
            </label>
            <button type="submit" className="forum__msg-btn">
              Post New Message
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default CurrentEvents;
