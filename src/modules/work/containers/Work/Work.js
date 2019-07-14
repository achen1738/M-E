import React, { Component } from "react";
import { FiCircle } from "react-icons/fi";
import "./Work.scss";
class Work extends Component {
  state = {};
  render() {
    return (
      <div className="work">
        <div className="work__timeline">
          <span />
          <div className="work__event ">
            <div className="work__event-date work__event-top">
              <FiCircle className="work__event-circle" />
              <span className="work__event-date">May, 2019</span>
            </div>
            <div className="work__event-content">
              <span />
              <div className="work__event-title">IBM</div>
              <div className="work__event-description">
                Full stack developer working on IBM Cloud microservices based
                infrastructure technologies to support IBM Analytics products
              </div>
            </div>
            <div className="work__event-date work__event-bottom">
              <FiCircle className="work__event-circle" />
              <span className="work__event-date">Aug, 2019</span>
            </div>
          </div>
          <span />
        </div>
      </div>
    );
  }
}

export default Work;
