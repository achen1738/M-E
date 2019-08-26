import React, { Component } from "react";
import styles from "./Skills.module.css";
import Card from "../../components/NewCard";

class Skills extends Component {
  state = {
    details: [
      {
        title: "React/HTML",
        text: (
          <>
            React is the language that I'm most comfortable with. I've built
            numerous applications using React, and with each one I've tried to
            learn something new. Through a summer internship with{" "}
            <a
              className="left__description-link"
              href="https://www.ibm.com/us-en/?ar=1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @IBM
            </a>{" "}
            I also learned how to use{" "}
            <a
              className="left__description-link"
              href="https://redux.js.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Redux
            </a>{" "}
            and{" "}
            <a
              className="left__description-link"
              href="https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Saga
            </a>
            .{" "}
          </>
        )
      },
      {
        title: "CSS/SCSS",
        text: (
          <>
            I would say I'm pretty good at styling. I think given any design I
            could implement it. However, I still need to get better at using
            more complex grid-layouts as well as using more fancy SCSS
            functions.
          </>
        )
      },
      {
        title: "Java",
        text: (
          <>
            Java is probably my second strongest language. I took three classes
            in Java:{" "}
            <a
              className="left__description-link"
              href="https://comp215.blogs.rice.edu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP215
            </a>
            ,{" "}
            <a
              className="left__description-link"
              href="https://www.clear.rice.edu/comp310/s19/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP310
            </a>
            , and{" "}
            <a
              className="left__description-link"
              href="https://www.clear.rice.edu/comp412/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP412
            </a>
            . I'm a teaching assistant for
            <a
              className="left__description-link"
              href="https://www.clear.rice.edu/comp310/s19/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP310
            </a>{" "}
            as well. I also originally did all of my interview questions in
            Java, so I know a bunch of language-specific syntax.
          </>
        )
      },
      {
        title: "NoSQL",
        text: (
          <>
            I feel like it's hard to determine my proficiency of NoSQL. I took
            one class in NoSQL:{" "}
            <a
              className="left__description-link"
              href="https://www.clear.rice.edu/comp430/16spring/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP430
            </a>
            . I've also built a few web-applications that used a NoSQL database
            for the backend. But, I think my experience at{" "}
            <a
              className="left__description-link"
              href="https://www.ibm.com/us-en/?ar=1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @IBM
            </a>{" "}
            taught me the most about NoSQL. Outside of just writing more
            queries, I learned a lot about how data should be decoupled and
            linked between different collections.
          </>
        )
      },
      {
        title: "T-SQL/PostgreSQL",
        text: (
          <>
            Similar to my experience with NoSQL, I've take two classes with
            relational SQL:{" "}
            <a
              className="left__description-link"
              href="https://courses.rice.edu/courses/!SWKSCAT.cat?p_action=COURSE&p_term=201610&p_crn=14383"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP330
            </a>
            , and{" "}
            <a
              className="left__description-link"
              href="https://www.clear.rice.edu/comp430/16spring/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP430
            </a>
            . I've also built a web application that once used a relational
            database management system for the backend.
          </>
        )
      },

      {
        title: "C",
        text: (
          <>
            Finally, C is probably my third strongest language. I've taken two
            classes in C:{" "}
            <a
              className="left__description-link"
              href="https://www.clear.rice.edu/comp321/html/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP321
            </a>
            , and{" "}
            <a
              className="left__description-link"
              href="https://www.clear.rice.edu/comp421/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP421
            </a>
            . I am a teaching assistant for{" "}
            <a
              className="left__description-link"
              href="https://www.clear.rice.edu/comp321/html/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP321
            </a>
            . In the grand scheme of things, I'm probably average at C, but
            because of Operating Systems (
            <a
              className="left__description-link"
              href="https://www.clear.rice.edu/comp421/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @COMP421
            </a>
            ) I would still say I'm pretty proficient at it for a college
            student.
          </>
        )
      }
    ]
  };

  renderCards = () => {
    return this.state.details.map((detail, index) => {
      return <Card key={index} detail={detail} />;
    });
  };

  render() {
    return <div className={styles.container}>{this.renderCards()}</div>;
  }
}

export default Skills;
