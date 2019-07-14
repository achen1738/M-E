import React, { Component } from "react";
import styles from "../Sections.module.css";
class InnerSection extends Component {
  state = {};
  render() {
    return (
      <div className={styles.innerCard}>
        <div className={styles.numWork}>{this.props.numWork}</div>
        {this.props.content}
        <div className={styles.description}>{this.props.description}</div>
      </div>
    );
  }
}

export default InnerSection;
