import React, { useState, useEffect } from "react";

const Username = () => {
  const [username, setUsername] = useState(() => {
    const saved = localStorage.getItem("username");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const onKeyDown = (event) => {
    const { key, target } = event;
    if (key == "Enter") {
      setUsername(target.value);
    }
  };

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(username));
  }, [username]);

  if (username !== "") {
    return <span className="username">{username} ▼</span>;
  }

  return (
    <form>
      <label>
        <input type="text" onKeyDown={onKeyDown} />
      </label>
    </form>
  );
};

export default Username;
