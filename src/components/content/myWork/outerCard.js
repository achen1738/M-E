import React, { Component } from "react";
import styles from "./myWork.module.css";
import InnerCard from "./innerCard";
class OuterCard extends Component {
  state = {};
  render() {
    return (
      <div className={[styles.container, this.props.color].join(" ")}>
        <InnerCard
          numWork={this.props.numWork}
          content={this.props.content}
          description={this.props.description}
        />
      </div>
    );
  }
}

export default OuterCard;
