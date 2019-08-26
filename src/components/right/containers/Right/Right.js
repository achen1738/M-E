import React, { Component } from "react";
import OuterSection from "../../components/OuterSection";
import Research from "../../../../modules/research/containers/Research";
import Work from "../../../../modules/work/containers/Work";
import Lanes from "../../../../modules/lanes/components/Lanes";
import Skills from "../../../../modules/skills/containers/Skills";
import "./Right.scss";
class Content extends Component {
  state = {};
  render() {
    return (
      <div className="right">
        <OuterSection
          color="right__one"
          numWork={".00 - Skills"}
          content={<Skills />}
          description={"Coding Languages and my Experience"}
        />
        <OuterSection
          color="right__two"
          numWork={".01 - Work Experience"}
          content={<Work />}
          description={"Internships and Full-Time"}
        />
        <OuterSection
          color="right__three"
          numWork={".02 - Research and Publications"}
          content={<Research />}
          description={"Materials Science Research at Stony Brook University"}
        />
        <OuterSection
          color="right__four"
          numWork={".03 - Lanes.gg"}
          content={<Lanes />}
          description={
            "Data Analysis of Individual Matches for League of Legends."
          }
        />
      </div>
    );
  }
}

export default Content;
