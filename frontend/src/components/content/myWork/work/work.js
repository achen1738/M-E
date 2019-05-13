import React, { Component } from "react";
import styles from "./work.module.css";
import { FiCircle } from "react-icons/fi";

class Work extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.timelineContainer}>
          <span />
          <div className={styles.event}>
            <div className={[styles.date, styles.top].join(" ")}>
              <FiCircle className={styles.circle} />
              <span className={styles.topText}>May, 2019</span>
            </div>
            <div className={styles.eventContent}>
              <span />
              <div className={styles.eventTitle}>IBM</div>
              <div className={styles.eventDescription}>
                Full stack developer working on IBM Cloud microservices based
                infrastructure technologies to support IBM Analytics products
              </div>
            </div>
            <div className={[styles.date, styles.bottom].join(" ")}>
              <FiCircle className={styles.circle} />
              <span className={styles.bottomText}>Aug, 2019</span>
            </div>
          </div>
          <span />
        </div>
      </div>
    );
  }
}

export default Work;
