import React, { Component } from "react";
import After from "../../../../files/newLane2.gif";
import { FaGithub } from "react-icons/fa";
import "./Lanes.scss";
class Lanes extends Component {
  state = {};
  render() {
    return (
      <div className="lanes__gif">
        <img src={After} alt="After gif" />
        <a
          className="lanes__github"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/achen1738/lanes.gg/tree/master/"
        >
          <FaGithub />
        </a>
      </div>
    );
  }
}

export default Lanes;
