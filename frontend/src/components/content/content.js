import React, { Component } from "react";
import styles from "./content.module.css";
import OuterCard from "./myWork/outerCard";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <OuterCard
          color={styles.teal}
          numWork={".00"}
          description={"This is me."}
        />
        <OuterCard
          color={styles.mediumPurple}
          numWork={".01"}
          description={"Research and Publications"}
        />
        <OuterCard
          color={styles.beige}
          numWork={".02"}
          description={"IBM Summer 2019"}
        />
        <OuterCard
          color={styles.mediumBlue}
          numWork={".03"}
          description={"Lanes.gg"}
        />
        <OuterCard
          color={styles.brightRed}
          numWork={".05"}
          description={"Kernel"}
        />
      </div>
    );
  }
}

export default Content;
