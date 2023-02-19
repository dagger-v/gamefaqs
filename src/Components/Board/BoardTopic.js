import React, { useState } from "react";
import { parse } from "date-fns";

import BoardDetail from "./BoardDetail";

const BoardTopic = () => {
  const BoardTopic = [
    {
      id: "current-events",
      board: "Current Events",
      title: "Skipping the anime opening is not the way to go",
      message: "test",
      author: "Poorly",
      count: 23,
      date: parse("2/13 2:09a", "M/dd h:mma", new Date()),
    },
    {
      id: "current-events",
      board: "Current Events",
      title: "Fire Emblem Engage: 4th Edition",
      message: "test",
      author: "Calwings",
      count: 58,
      date: parse("2/13 3:48a", "M/dd h:mma", new Date()),
    },
  ];

  return <></>;
};

export default BoardTopic;
