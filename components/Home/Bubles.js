import React, { Component } from "react";

const Bubbles = props => {
  return (
    <ul className="bubbleGroup">
      <li className="bubble active" />
      <li className="bubble" />
      <li className="bubble" />
      <li className="bubble" />
      <li id="bubbleFooter" className="bubble" />
    </ul>
  );
};

export default Bubbles;
