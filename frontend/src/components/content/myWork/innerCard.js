import React, { Component } from "react";
import styles from "./myWork.module.css";
class InnerCard extends Component {
  state = {};
  render() {
    return (
      <div className={styles.innerCard}>
        <div className={styles.numWork}>{this.props.numWork}</div>
        <div className={styles.image} />
        <div className={styles.description}>{this.props.description}</div>
      </div>
    );
  }
}

export default InnerCard;
