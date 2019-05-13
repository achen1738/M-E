import React, { Component } from "react";
import styles from "./content.module.css";
import OuterCard from "./myWork/outerCard";
import Research from "./myWork/research/research";
import Lanes from "./myWork/lanes/lanes";
import Meself from "./myWork/meself/meself";
import Skills from "./myWork/skills/skills";
import Work from "./myWork/work/work";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <OuterCard
          color={styles.teal}
          numWork={".00 - Skills"}
          content={<Skills />}
          description={"Coding Languages and my Experience"}
        />
        <OuterCard
          color={styles.mediumBlue}
          numWork={".01 - Work Experience"}
          content={<Work />}
          description={"Internships and Full-Time"}
        />
        <OuterCard
          color={styles.mediumPurple}
          numWork={".02 - Research and Publications"}
          content={<Research />}
          description={"Materials Science Research at Stony Brook University"}
        />

        <OuterCard
          color={styles.black}
          numWork={".03 - Independent and School Projects"}
          content={<Lanes />}
          description={
            "Data Analysis of Individual Matches for League of Legends."
          }
        />
        {/* <OuterCard
          color={styles.brightRed}
          description={"Kernel"}
        /> */}
      </div>
    );
  }
}

export default Content;
