import React, { Component } from "react";
import styles from "./Sidebar.module.css";
import { FaEnvelope, FaGithub, FaFileAlt, FaMobileAlt } from "react-icons/fa";
import Resume from "../../files/ArthurChenResume.pdf";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.links}>
            <a
              href={Resume}
              style={{ width: "150px" }}
              className={[styles.link, styles.linkable].join(" ")}
              download
            >
              <FaFileAlt
                className={[styles.icon, styles.smallIcon].join(" ")}
              />
              <span className={styles.linkText}>resume</span>
            </a>

            <div className={styles.link}>
              <FaMobileAlt
                className={[styles.icon, styles.smallIcon].join(" ")}
              />
              <span className={styles.linkText}>516-506-1738</span>
            </div>

            <div className={styles.link}>
              <FaEnvelope className={[styles.icon, styles.bigIcon].join(" ")} />
              <span className={styles.linkText}>ac99@rice.edu</span>
            </div>

            <a
              href="https://www.github.com/achen1738"
              style={{ width: "400px" }}
              className={[styles.link, styles.linkable].join(" ")}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className={[styles.icon, styles.bigIcon].join(" ")} />
              <span className={styles.linkText}>github.com/achen1738</span>
            </a>
          </div>

          <div className={styles.name}>Arthur Chen</div>
          <div className={styles.description}>
            Hi, I’m currently a rising-senior majoring in Computer Science at
            Rice University. Working at IBM this summer in Austin. Here are some
            things about me, and some things I have worked on.
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
