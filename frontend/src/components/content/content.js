import React, { Component } from "react";
import styles from "./content.module.css";
import OuterCard from "./myWork/outerCard";
import Research from "./myWork/research";
import Lanes from "./myWork/lanes";
import Meself from "./myWork/meself";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <OuterCard
          color={styles.teal}
          numWork={".00"}
          content={<Meself />}
          description={"This is me."}
        />
        <OuterCard
          color={styles.mediumBlue}
          numWork={".02 - Work Experience"}
          description={"Internships and Full-Time"}
        />
        <OuterCard
          color={styles.mediumPurple}
          numWork={".03 - Research and Publications"}
          content={<Research />}
          description={"Materials Science Research at Stony Brook University"}
        />

        <OuterCard
          color={styles.black}
          numWork={".04 - Independent and School Projects"}
          content={<Lanes />}
          description={
            "Data Analysis of Individual Matches for League of Legends."
          }
        />
        <OuterCard
          color={styles.brightRed}
          //   numWork={".05"}
          description={"Kernel"}
        />
      </div>
    );
  }
}

export default Content;
