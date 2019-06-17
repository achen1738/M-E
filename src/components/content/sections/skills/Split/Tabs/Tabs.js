import React, { Component } from "react";
// eslint-disable-next-line
import Tab from "./Tab";
import styles from "./Tabs.module.css";
class Tabs extends Component {
  state = {
    menuExpanded: false,
    selectedIndex: 0
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.menu} />
        <span className={styles.language}>ReactJS</span>
        <span className={styles.proficiency}>Fluent</span>
      </div>
    );
  }
}

export default Tabs;
