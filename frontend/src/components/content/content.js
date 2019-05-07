import React, { Component } from "react";
import styles from "./content.module.css";
import OuterCard from "./myWork/outerCard";
import Research from "./myWork/research";
import Lanes from "./myWork/lanes";

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
          numWork={".01 - Research and Publications"}
          content={<Research />}
          description={"Materials Science Research at Stony Brook University"}
        />
        <OuterCard
          color={styles.beige}
          numWork={".02"}
          description={"IBM Summer 2019"}
        />
        <OuterCard
          color={styles.mediumBlue}
          numWork={".03 - Lanes.gg (Not Hosted)"}
          content={<Lanes />}
          description={
            "Data Analysis of Individual Matches for League of Legends."
          }
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
