import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../../containers/Skills/Skills.module.css";
class Experience extends Component {
  state = {};

  renderGroup = (group, groupString) => {
    let { index, color, solidBackground, icons } = this.props;

    const openedGroup = group.opened;
    return group.ids.map((id, idx) => {
      let expStyle = [styles.class, color];
      if (openedGroup[idx]) expStyle.push(solidBackground, styles.whiteText);
      //   else expStyle.push(this.state.colors[index]);
      return (
        <div
          data-content-index={index}
          data-opened-index={idx}
          onClick={e => this.props.setExperienceOpened(e, groupString)}
          key={idx}
          className={expStyle.join(" ")}
        >
          <span className={[color, styles.center].join(" ")}>
            {groupString === "work" ? icons[id] : id}
          </span>
        </div>
      );
    });
  };

  render() {
    let { groupString, info, content, color } = this.props;
    const group = content[groupString];
    const openedIndex = group.opened.findIndex(bool => bool);
    const openedID = group.ids[openedIndex];
    const infoText = " - " + info[openedID];
    const textStyle = [styles.experienceText, color];
    if (group.ids.length > 0) {
      return (
        <>
          <div data-info={infoText} className={textStyle.join(" ")}>
            {groupString}
          </div>
          <div className={styles.classes}>
            {this.renderGroup(group, groupString)}
          </div>
        </>
      );
    }
    return null;
  }
}

Experience.propTypes = {
  index: PropTypes.number.isRequired,
  groupString: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
  icons: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  solidBackground: PropTypes.string.isRequired,
  setExperienceOpened: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired
};

export default Experience;
