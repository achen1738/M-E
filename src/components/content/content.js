import React, { Component } from "react";
import styles from "./Content.module.css";
// eslint-disable-next-line
import { OuterSection, Research, Lanes, Skills, Work, Split } from "./sections";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <OuterSection
          color={styles.teal}
          numWork={".00 - Skills"}
          content={<Skills />}
          description={"Coding Languages and my Experience"}
        />
        <OuterSection
          color={styles.mediumBlue}
          numWork={".01 - Work Experience"}
          content={<Work />}
          description={"Internships and Full-Time"}
        />
        <OuterSection
          color={styles.mediumPurple}
          numWork={".02 - Research and Publications"}
          content={<Research />}
          description={"Materials Science Research at Stony Brook University"}
        />
        <OuterSection
          color={styles.black}
          numWork={".03 - Lanes.gg"}
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
