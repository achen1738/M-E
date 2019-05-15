import React, { Component } from "react";
import styles from "./skills.module.css";
import colors from "../colors.module.css";
import {
  FiMaximize2,
  FiMinimize2,
  FiChevronUp,
  FiChevronDown
} from "react-icons/fi";
class Skills extends Component {
  state = {
    backgroundColors: [
      colors.forest,
      colors.violet,
      colors.peach,
      colors.friday,
      colors.bloo,
      colors.sundown,
      colors.ocean,
      colors.animation,
      colors.candy,
      colors.evergarden,
      colors.reddy,
      colors.mochi
    ],
    solidBackground: [
      colors.forestBackground,
      colors.violetBackground,
      colors.peachBackground,
      colors.fridayBackground,
      colors.blooBackground,
      colors.sundownBackground,
      colors.oceanBackground,
      colors.animationBackground,
      colors.candyBackground,
      colors.evergardenBackground,
      colors.reddyBackground,
      colors.mochiBackground
    ],
    colors: [
      colors.forestText,
      colors.violetText,
      colors.peachText,
      colors.fridayText,
      colors.blooText,
      colors.sundownText,
      colors.oceanText,
      colors.animationText,
      colors.candyText,
      colors.evergardenText,
      colors.reddyText,
      colors.mochiText
    ],
    opened: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    info: {
      430: "Intro to Database Systems",
      427: "Introduction to Computer Security",
      425: "Computer Systems Architecture",
      421: "Operating Systems / Concurrent Programming",
      412: "Compiler Construction - UG COMP",
      410: "Software Engineering Methodology",
      382: "Reasoning about Algorithms",
      330: "Tools and Models - Data Science",
      322: "Fundamentals of Parallel Programming",
      321: "Introduction to Computer Systems",
      310: "Advanced Object Oriented Programming",
      215: "Introduction to Program Design",
      182: "Discrete Math and Algorithmic Thinking",
      140: "Introduction to Python",
      L: "League of Legends Website",
      SW: "School Sustainability Website",
      AC: "This website"
    },
    content: [
      {
        down: true,
        text: "Java",
        fluency: "(Fluent)",
        classes: { ids: [215, 310, 412], opened: [true, false, false] },
        projects: { ids: [], opened: [] },
        lines: "5,000+"
      },
      {
        down: true,
        text: "C",
        fluency: "(Fluent)",
        classes: { ids: [321, 421], opened: [true, false] },
        projects: { ids: [], opened: [] },
        lines: "10,000+"
      },
      {
        down: true,
        text: "ReactJS",
        fluency: "(Fluent)",
        classes: { ids: [410], opened: [true] },
        projects: { ids: ["L", "SW", "AC"], opened: [true, false, false] },
        lines: "10,000+"
      },
      {
        down: true,
        text: "T-SQL",
        fluency: "(Fluent)",
        classes: { ids: [330, 430], opened: [true, false] },
        projects: { ids: ["L"], opened: [true] },
        lines: "~1,000"
      },
      {
        down: true,
        text: "Javascript",
        fluency: "(Fluent)",
        classes: { ids: [410], opened: [true] },
        projects: { ids: ["L", "SW", "AC"], opened: [true, false, false] },
        lines: "~5,000"
      },
      {
        down: true,
        text: "HTML5",
        fluency: "(Fluent)",
        classes: { ids: [410], opened: [true] },
        projects: { ids: ["L", "SW", "AC"], opened: [true, false, false] },
        lines: "10,000+"
      },
      {
        down: true,
        text: "CSS3",
        fluency: "(Fluent)",
        classes: { ids: [410], opened: [true] },
        projects: { ids: ["L", "SW", "AC"], opened: [true, false, false] },
        lines: "10,000+"
      },
      {
        down: true,
        text: "PostgreSQL",
        fluency: "(Fluent)",
        classes: { ids: [430], opened: [true] },
        projects: { ids: [], opened: [] },
        lines: "~1,000"
      },
      {
        down: true,
        text: "Typescript",
        fluency: "(Functional)",
        classes: { ids: [410], opened: [true] },
        projects: { ids: [], opened: [] },
        lines: "~2,000"
      },
      {
        down: true,
        text: "NoSQL",
        fluency: "(Functional)",
        classes: { ids: [430], opened: [true] },
        projects: { ids: ["L", "SW"], opened: [true, false] },
        lines: "~500"
      },
      {
        down: true,
        text: "Python",
        fluency: "(Functional)",
        classes: { ids: [140, 182], opened: [true, false] },
        projects: { ids: [], opened: [] },
        lines: "~1000"
      },
      {
        down: true,
        text: "NodeJS",
        fluency: "(Functional)",
        classes: { ids: [], opened: [] },
        projects: { ids: ["L", "SW"], opened: [true, false] },
        lines: "~500"
      }
    ]
  };

  handleScroll = (e, index) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (e.target.scrollHeight - e.target.clientHeight !== 0) {
      var content = this.state.content;
      if (bottom) {
        content[index].down = false;
      } else if (e.target.scrollTop === 0) {
        content[index].down = true;
      }
      this.setState({ content: content });
    }
  };

  setCardOpened = e => {
    const index = parseInt(e.currentTarget.getAttribute("data-index"));
    var opened = this.state.opened;
    opened[index] = !opened[index];
    this.setState({ opened: opened });
  };

  setExperienceOpened = (e, groupString) => {
    const contentIndex = parseInt(
      e.currentTarget.getAttribute("data-content-index")
    );
    const openedIndex = parseInt(
      e.currentTarget.getAttribute("data-opened-index")
    );
    var content = this.state.content;
    var newOpened = content[contentIndex][groupString].opened.map(
      (bool, index) => {
        return index === openedIndex;
      }
    );
    content[contentIndex][groupString].opened = newOpened;
    this.setState({ content: content });
  };

  renderExperience = (index, groupString) => {
    const group = this.state.content[index][groupString];
    const openedIndex = group.opened.findIndex(bool => bool);
    const openedID = group.ids[openedIndex];
    const info = " - " + this.state.info[openedID];
    const textStyle = [styles.experienceText, this.state.colors[index]];
    if (group.ids.length > 0) {
      return (
        <>
          <div data-info={info} className={textStyle.join(" ")}>
            {groupString}
          </div>
          <div className={styles.classes}>
            {this.renderGroup(group, index, groupString)}
          </div>
        </>
      );
    }
  };

  renderGroup = (group, index, groupString) => {
    const openedGroup = group.opened;
    return group.ids.map((id, idx) => {
      let expStyle = [styles.class, this.state.colors[index]];
      if (openedGroup[idx])
        expStyle.push(this.state.solidBackground[index], styles.whiteText);
      //   else expStyle.push(this.state.colors[index]);
      return (
        <div
          data-content-index={index}
          data-opened-index={idx}
          onClick={e => this.setExperienceOpened(e, groupString)}
          key={idx}
          className={expStyle.join(" ")}
        >
          <span className={[this.state.colors[index]]}>{id}</span>
        </div>
      );
    });
  };

  renderLines = index => {
    return (
      <div className={[styles.lines, this.state.colors[index]].join(" ")}>
        Lines of Code: {this.state.content[index].lines}
      </div>
    );
  };

  renderCards = () => {
    return this.state.content.map((exp, index) => {
      let contentStyle = [styles.cardContent];
      if (this.state.opened[index]) contentStyle.push(styles.moved);

      let headerStyle = [styles.cardHeader];
      if (this.state.opened[index]) headerStyle.push(styles.expandedHeader);

      let bodyStyle = [styles.cardBody];
      if (this.state.opened[index]) bodyStyle.push(styles.shiftBody);

      return (
        <div
          key={index}
          data-index={index}
          className={[styles.cardContainer].join(" ")}
        >
          <div
            className={[
              styles.cardColor,
              this.state.backgroundColors[index]
            ].join(" ")}
          />
          <div className={contentStyle.join(" ")}>
            <div className={headerStyle.join(" ")}>
              <div className={styles.cardInfo}>
                <span className={[styles.cardText].join(" ")}>{exp.text}</span>
                <span className={styles.fluency}>{exp.fluency}</span>
              </div>
              <div className={styles.arrowContainer}>
                {this.state.opened[index] ? (
                  <FiMinimize2
                    data-index={index}
                    onClick={e => this.setCardOpened(e)}
                  />
                ) : (
                  <FiMaximize2
                    data-index={index}
                    onClick={e => this.setCardOpened(e)}
                  />
                )}
              </div>
            </div>
            <div
              className={bodyStyle.join(" ")}
              onScroll={e => this.handleScroll(e, index)}
            >
              {this.renderExperience(index, "classes")}
              {this.renderExperience(index, "projects")}
            </div>
            <div
              className={[
                styles.experienceArrowContainer,
                this.state.colors[index]
              ].join(" ")}
            >
              {this.renderArrows(index)}
            </div>
          </div>
          <div />
        </div>
      );
    });
  };

  isScrollable = index => {
    var content = this.state.content[index];
    const classLen = content.classes.ids.length;
    const projectLen = content.projects.ids.length;
    return classLen && projectLen;
  };

  renderArrows = index => {
    if (this.isScrollable(index)) {
      return this.state.content[index].down ? (
        <FiChevronDown />
      ) : (
        <FiChevronUp />
      );
    }
  };

  render() {
    return <div className={styles.container}>{this.renderCards()}</div>;
  }
}

export default Skills;
