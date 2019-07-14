import React, { Component } from "react";
import "./InnerSection.scss";
class InnerSection extends Component {
  state = {};
  render() {
    return (
      <div className="inner">
        <div className="inner__work">{this.props.numWork}</div>
        {this.props.content}
        <div className="inner__description">{this.props.description}</div>
      </div>
    );
  }
}

export default InnerSection;
