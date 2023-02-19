import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Board from "./Board/Board";
import BoardDetail from "./Board/BoardDetail";
import CurrentEvents from "./Forum/Board/CurrentEvents";
import AnimeOpenings from "./Forum/Topic/AnimeOpenings";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/currentevents" element={<CurrentEvents />} />
        <Route path="/anime" element={<AnimeOpenings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
