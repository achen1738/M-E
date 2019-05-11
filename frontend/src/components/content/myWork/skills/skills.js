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
    content: [{}, {}]
    // Java (fluent), C (fluent), T-SQL/Postgres (fluent), ReactJS (fluent), HTML (fluent),
    // CSS (fluent), Javascript (fluent), Python (functional), NodeJS (functional), NoSQL (functional)
  };

  setOpened = e => {
    const index = parseInt(e.currentTarget.getAttribute("data-index"));
    var opened = this.state.opened;
    opened[index] = !opened[index];
    this.setState({ opened: opened });
  };

  renderCards = () => {
    return this.state.text.map((text, index) => {
      let contentStyle = [styles.cardContent];
      if (this.state.opened[index]) contentStyle.push(styles.moved);

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
            <div className={styles.cardHeader}>
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
            <div className={styles.cardBody}>
              <div className={styles.classes}>
                <div className={styles.class}>215</div>
                <div className={styles.class}>310</div>
                <div className={styles.class}>412</div>
              </div>
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
