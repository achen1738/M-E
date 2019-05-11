import React, { Component } from "react";
import styles from "./skills.module.css";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

class Skills extends Component {
  state = {
    backgroundColors: [
      styles.forest,
      styles.violet,
      styles.peach,
      styles.friday,
      styles.bloo,
      styles.sundown,
      styles.ocean,
      styles.animation,
      styles.candy,
      styles.evergarden,
      styles.reddy,
      styles.mochi
    ],
    colors: [
      styles.forestText,
      styles.violetText,
      styles.peachText,
      styles.fridayText,
      styles.blooText,
      styles.sundownText,
      styles.oceanText,
      styles.animationText,
      styles.candyText,
      styles.evergardenText,
      styles.reddyText,
      styles.mochiText
    ],
    text: [
      "Java",
      "C",
      "ReactJS",
      "T-SQL",
      "Javascript",
      "HTML5",
      "CSS3",
      "PostgreSQL",
      "Typescript",
      "NoSQL",
      "Python",
      "NodeJS"
    ],
    fluency: [
      "(Fluent)",
      "(Fluent)",
      "(Fluent)",
      "(Fluent)",
      "(Fluent)",
      "(Fluent)",
      "(Fluent)",
      "(Fluent)",
      "(Functional)",
      "(Functional)",
      "(Functional)",
      "(Functional)"
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
    content: [
      {
        experience: [215, 310, 412],
        lines: "5,000+"
      },
      {
        experience: [321, 421],
        lines: "10,000+"
      },
      {
        experience: [410, "l.gg"],
        lines: "10,000+"
      },
      {
        experience: [330, 430, "l.gg"],
        lines: "~1,000"
      },
      {
        experience: ["l.gg"],
        lines: "~5,000"
      },
      {
        experience: [410, "l.gg"],
        lines: "10,000+"
      },
      {
        experience: [410, "l.gg"],
        lines: "10,000+"
      },
      {
        experience: [430, "l.gg"],
        lines: "~1,000"
      },
      {
        experience: [410],
        lines: "~2,000"
      },
      {
        experience: [430, "l.gg"],
        lines: "~500"
      },
      {
        experience: [140, 182],
        lines: "~1000"
      },
      {
        experience: ["l.gg"],
        lines: "~500"
      }
    ]
    // "Java",
    // "C",
    // "ReactJS",
    // "T-SQL",
    // "Javascript",
    // "HTML5",
    // "CSS3",
    // "PostgreSQL",
    // "Typescript",
    // "NoSQL",
    // "Python",
    // "NodeJS"
  };

  setOpened = e => {
    const index = parseInt(e.currentTarget.getAttribute("data-index"));
    var opened = this.state.opened;
    opened[index] = !opened[index];
    this.setState({ opened: opened });
  };

  renderExperience = index => {
    return this.state.content[index].experience.map(exp => {
      return (
        <div className={[styles.class, this.state.colors[index]].join(" ")}>
          {exp}
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
    return this.state.text.map((text, index) => {
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
                <span className={[styles.cardText].join(" ")}>{text}</span>
                <span className={styles.fluency}>
                  {this.state.fluency[index]}
                </span>
              </div>
              <div className={styles.arrowContainer}>
                {this.state.opened[index] ? (
                  <FiMinimize2
                    data-index={index}
                    onClick={e => this.setOpened(e)}
                  />
                ) : (
                  <FiMaximize2
                    data-index={index}
                    onClick={e => this.setOpened(e)}
                  />
                )}
              </div>
            </div>
            <div className={bodyStyle.join(" ")}>
              <div
                className={[styles.classHeader, this.state.colors[index]].join(
                  " "
                )}
              >
                Experience
              </div>
              <div className={styles.classes}>
                {this.renderExperience(index)}
              </div>
              {this.renderLines(index)}
            </div>
          </div>
          <div />
        </div>
      );
    });
  };

  render() {
    return <div className={styles.container}>{this.renderCards()}</div>;
  }
}

export default Skills;
