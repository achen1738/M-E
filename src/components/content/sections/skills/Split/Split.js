import React, { Component } from "react";
import { Body } from "./Body";
import { Tabs } from "./Tabs";
import styles from "./Split.module.css";

class Split extends Component {
  state = {};
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Tabs />
          <Body />
        </div>
      </div>
    );
  }
}

export default Split;
