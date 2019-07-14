import React, { Component } from "react";
import styles from "../Sections.module.css";
import InnerSection from "../InnerSection";
import "./OuterSection.scss";
class OuterSection extends Component {
  state = {};
  render() {
    return (
      <div className={[styles.container, this.props.color].join(" ")}>
        <InnerSection
          numWork={this.props.numWork}
          content={this.props.content}
          description={this.props.description}
        />
      </div>
    );
  }
}

export default OuterSection;
