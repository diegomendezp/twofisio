import React, { Component } from "react";

const Bubbles = props => {
  return (
    <ul className="bubbleGroup">
      <li className="position">{props.position}</li>
      <li className="bubble active" />
      <li className="bubble" />
      <li className="bubble" />
      <li className="bubble" />
      <li className="bubble" />
    </ul>
  );
};

export default Bubbles;
