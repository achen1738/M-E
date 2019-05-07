import React, { Component } from "react";
import After from "../../../files/newLane2.gif";
import { FaGithub } from "react-icons/fa";
import styles from "./lanes.module.css";

class Lanes extends Component {
  state = {};
  render() {
    return (
      <div className={styles.right}>
        <div className={styles.gif}>
          <img src={After} alt="After gif" />
          <a
            className={styles.githubLink}
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/achen1738/lanes.gg/tree/master/"
          >
            <FaGithub className={[styles.icon, styles.bigIcon].join(" ")} />
          </a>
        </div>
      </div>
    );
  }
}

export default Lanes;
