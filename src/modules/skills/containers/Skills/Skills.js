import React, { Component } from "react";
import styles from "./Skills.module.css";
import Card from "../../components/NewCard";

class Skills extends Component {
  state = {
    details: [
      {
        title: "React",
        text: (
          <>
            React is definitely the language that I'm most comfortable with.
            I've built a lot of applications using React, and with each one I've
            tried to learn something new. Also, through my summer internship
            with IBM, I used and learned a lot about Redux and Saga.
          </>
        )
      },
      {
        title: "CSS/SCSS",
        text: (
          <>
            It's hard to quantify my skill in CSS/SCSS, but I think given any
            design I could implement it. Its a language I learned a lot about
            through personal projects and research.
          </>
        )
      },
      {
        title: "Java",
        text: (
          <>
            Java is the language I used the most at school. I took three classes
            in Java, and was a teaching assistant for another. I've never had
            work experience with Java, but I think I'm still fairly proficeint
            at it.
          </>
        )
      },
      {
        title: "Relational + Non-Relational SQL",
        text: (
          <>
            I've taken two classes that touched both relational and
            non-relational SQL at school. I've also learned a lot about MongoDB
            and APIs in general through my internship at IBM.
          </>
        )
      },
      {
        title: "C",
        text: (
          <>
            Finally, C is my last functional language. I've taken two classes in
            C with one of them being Operating Systems. Even though I am not an
            expert in C, because of Operating Systems I'm also not a complete
            stranger to it.
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
