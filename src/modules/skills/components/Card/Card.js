import React, { Component } from "react";
import Experience from "../Experience";
import styles from "../../containers/Skills/Skills.module.css";
import PropTypes from "prop-types";
import {
  FiChevronUp,
  FiChevronDown,
  FiMaximize2,
  FiMinimize2
} from "react-icons/fi";
import "./Card.scss";
class SkillCard extends Component {
  state = {};

  isScrollable = () => {
    var content = this.props.content;
    const classLen = content.classes.ids.length;
    const projectLen = content.projects.ids.length;
    return classLen && projectLen;
  };

  handleScroll = (e, index) => {
    let { content, setContent } = this.props;
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (e.target.scrollHeight - e.target.clientHeight !== 0) {
      if (bottom) {
        content.down = false;
      } else if (e.target.scrollTop === 0) {
        content.down = true;
      }
      setContent(content, index);
    }
  };

  handleOpen = () => {
    this.props.setCardOpened(this.props.index);
  };

  renderArrows = () => {
    if (this.isScrollable()) {
      return this.props.content.down ? <FiChevronDown /> : <FiChevronUp />;
    }
    return null;
  };

  renderExperiences = () => {
    let { index, color, content, solidBackground, info, icons } = this.props;

    return ["work", "classes", "projects"].map((groupString, idx) => {
      return (
        <Experience
          key={idx}
          index={index}
          groupString={groupString}
          content={content}
          info={info}
          icons={icons}
          color={color}
          solidBackground={solidBackground}
          setExperienceOpened={this.props.setExperienceOpened}
          setContent={this.props.setContent}
        />
      );
    });
  };

  render() {
    let {
      index,
      backgroundColor,
      color,
      opened,
      contentStyle,
      headerStyle,
      bodyStyle,
      exp
    } = this.props;
    return (
      <div key={index} data-index={index} className="skills__card">
        <div className={[styles.cardColor, backgroundColor].join(" ")} />
        <div className={contentStyle.join(" ")}>
          <div className={headerStyle.join(" ")}>
            <div className="skills__card-info">
              <span className="skills__card-text">{exp.text}</span>
              <span className="skills__card-fluency">{exp.fluency}</span>
            </div>
            <div className="skills__card-arrow">
              {opened ? (
                <FiMinimize2
                  data-index={index}
                  onClick={() => this.handleOpen()}
                />
              ) : (
                <FiMaximize2 onClick={() => this.handleOpen()} />
              )}
            </div>
          </div>
          <div
            className={bodyStyle.join(" ")}
            onScroll={e => this.handleScroll(e)}
          >
            {this.renderExperiences()}
          </div>
          <div className={[styles.experienceArrowContainer, color].join(" ")}>
            {this.renderArrows()}
          </div>
        </div>
        <div />
      </div>
    );
  }
}

SkillCard.propTypes = {
  index: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  opened: PropTypes.bool.isRequired,
  setCardOpened: PropTypes.func.isRequired,
  contentStyle: PropTypes.array.isRequired,
  headerStyle: PropTypes.array.isRequired,
  bodyStyle: PropTypes.array.isRequired,
  exp: PropTypes.object.isRequired,
  solidBackground: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  icons: PropTypes.object.isRequired,
  setExperienceOpened: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired
};

export default SkillCard;
