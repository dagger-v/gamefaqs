import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import LOGO from "../../Images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__console">
        <div className="header__console-nav">
          <span>PC</span>
          <span>PS4</span>
          <span>PS5</span>
          <span>Switch</span>
          <span>Xbox One</span>
          <span>Xbox Series</span>
          <span>More Systems ▼</span>
          <span className="username">
            ✉ <i class="far fa-bell"></i> SomeLikeItHoth ▼
          </span>
        </div>
      </div>
      <div className="header__container">
        <div className="header__container-logo">
          <Link to="/">
            <img src={LOGO} alt="logo"></img>
          </Link>
        </div>
        <div className="header__container-search">
          <input
            className="search"
            type="text"
            placeholder="Search Game Titles"
            name="search"
          />
        </div>
        <nav className="header__container-nav">
          <a href="/board" className="header__nav-item">
            Boards
          </a>
          <span className="header__nav-item">News</span>
          <span className="header__nav-item">Q&A</span>
          <span className="header__nav-item">Community</span>
          <span className="header__nav-item">Contribute</span>
          <span className="header__nav-item">Games</span>
        </nav>
      </div>
      <div className="header__footer"></div>
    </div>
  );
};

export default Header;
