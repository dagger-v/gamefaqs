import React from "react";

const TopicArr = ({ topic, id, title, messagePath, author, count, date }) => {
  return (
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
        {topic &&
          topic
            .filter((x) => x.board === id)
            .sort((a, b) => {
              if (a > b) {
                return 1;
              }
              return -1;
            })
            .map(({ title, messagePath, author, count, date }, index) => (
              <tr>
                <td className="forum__topic">
                  <a href={id + "/" + messagePath}>{title}</a>
                </td>
                <td>{author}</td>
                <td className="forum__msg">{count}</td>
                <td>{date}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

export default TopicArr;
