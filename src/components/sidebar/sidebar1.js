import React, { Component } from "react";
import styles from "./sidebar1.module.css";
import {
  FiClipboard,
  FiDownload,
  FiGithub,
  FiFile,
  FiMail,
  FiLink
} from "react-icons/fi";
import Resume from "../../files/ArthurChenResume.pdf";
import { CopyToClipboard } from "react-copy-to-clipboard";

class SideBar1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      copySuccess: "",
      copied: false
    };

    const resume = this.resume();
    const email = this.email();
    const github = this.github();

    this.state = {
      activeIndex: 0,
      copySuccess: "",
      linkComponent: [resume, email, github],
      copied: false
    };
  }

  copyToClipboard = e => {
    this.textArea.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };

  renderLinkText = () => {
    const index = this.state.activeIndex;
    switch (parseInt(index)) {
      case 0:
        return this.resume();
      case 1:
        return this.email();
      case 2:
        return this.github();
      default:
        return;
    }
  };

  setIndex = e => {
    this.setState({ activeIndex: e.currentTarget.getAttribute("data-index") });
  };

  resume = () => {
    return (
      <a
        href={Resume}
        className={[styles.linkText, styles.link, styles.red].join(" ")}
        download
      >
        <span>RESUME</span>
        <FiDownload className={styles.textIcon} />
      </a>
    );
  };

  email = () => {
    return (
      <CopyToClipboard
        onCopy={() => this.setState({ copied: true })}
        className={
          this.state.copied
            ? [
                styles.linkText,
                styles.link,
                styles.clipboard,
                styles.blue
              ].join(" ")
            : [styles.linkText, styles.link, styles.blue].join(" ")
        }
        text={"ac99@rice.edu"}
      >
        <div className={styles.linkText}>
          <span>ac99@rice.edu</span>
          <FiClipboard className={styles.textIcon} />
        </div>
      </CopyToClipboard>
    );
  };

  github = () => {
    return (
      <a
        href="https://www.github.com/achen1738"
        className={[styles.linkText, styles.link, styles.teal].join(" ")}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>GITHUB</span>
        <FiLink className={styles.textIcon} />
      </a>
    );
  };

  render = () => {
    var resumeStyles = [styles.link, styles.linkable, styles.red];
    var emailStyles = [styles.link, styles.linkable, styles.blue];
    var githubStyles = [styles.link, styles.linkable, styles.teal];
    switch (parseInt(this.state.activeIndex)) {
      case 0:
        resumeStyles.push(styles.activeRed);
        break;
      case 1:
        emailStyles.push(styles.activeBlue);
        break;
      case 2:
        githubStyles.push(styles.activeTeal);
        break;
      default:
        break;
    }

    return (
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.linksContainer}>
            <div className={styles.links}>
              <div className={resumeStyles.join(" ")}>
                <FiFile
                  data-index={0}
                  onClick={e => this.setIndex(e)}
                  className={[styles.icon, styles.smallIcon].join(" ")}
                />
              </div>

              <div className={emailStyles.join(" ")}>
                <FiMail
                  data-index={1}
                  onClick={e => this.setIndex(e)}
                  className={[styles.icon, styles.smallIcon].join(" ")}
                />
              </div>

              <div className={githubStyles.join(" ")}>
                <FiGithub
                  data-index={2}
                  onClick={e => this.setIndex(e)}
                  className={[styles.icon, styles.smallIcon].join(" ")}
                />
              </div>
            </div>
            {this.renderLinkText()}
          </div>
          <div className={styles.name}>Arthur Chen</div>
          <div className={styles.description}>
            Currently a rising-senior at{" "}
            <a
              className={styles.descriptionLink}
              href="https://www.rice.edu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Rice University
            </a>{" "}
            studying computer science. Working at{" "}
            <a
              className={styles.descriptionLink}
              href="https://www.ibm.com/us-en/?ar=1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @IBM
            </a>{" "}
            this summer in Austin. Here are some things about me.
          </div>
          <a className={styles.emailBtn} href="mailto:ac99@rice.edu">
            Email Me!
          </a>
        </div>
      </div>
    );
  };
}

export default SideBar1;
