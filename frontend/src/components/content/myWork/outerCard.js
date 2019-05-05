import React, { Component } from "react";
import styles from "./myWork.module.css";
import InnerCard from "./innerCard";
class Myself extends Component {
  state = {};
  render() {
    return (
      <div className={[styles.container, this.props.color].join(" ")}>
        <InnerCard
          numWork={this.props.numWork}
          image={this.props.image}
          description={this.props.description}
        />
      </div>
    );
  }
}

export default Myself;
