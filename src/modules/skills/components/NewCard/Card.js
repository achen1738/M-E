import React from "react";
import "./Card.scss";
const Card = props => {
  let { title, text } = props.detail;
  console.log(title, text);
  return (
    <div className="skills__card">
      <div className="skills__card--title">{title}</div>
      <div className="skills__card--text">{text}</div>
    </div>
  );
};

export default Card;
