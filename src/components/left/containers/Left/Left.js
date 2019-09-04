import React, { Component } from "react";
import {
  FiClipboard,
  FiDownload,
  FiGithub,
  FiFile,
  FiMail,
  FiLink,
  FiCodepen,
  FiLinkedin
} from "react-icons/fi";
import Resume from "../../../../files/ArthurChenResume.pdf";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Left.scss";
class SideBar1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      copySuccess: "",
      copied: false
    };

    this.state = {
      activeIndex: 0,
      copySuccess: "",
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
        return this.linkedin();
      case 2:
        return this.email();
      case 3:
        return this.github();
      case 4:
        return this.code();
      default:
        return;
    }
  };

  setIndex = activeIndex => {
    this.setState({ activeIndex, copied: false });
  };

  resume = () => {
    return (
      <a
        href={Resume}
        className="left__about-link-text left__about-link left__red"
        download
      >
        <span>Resume</span>
        <FiDownload className="left__icon_text" />
      </a>
    );
  };

  email = () => {
    let copied =
      "left__about-link-text left__about-link left__blue left__clipboard";
    let notCopied = "left__about-link-text left__about-link left__green";
    return (
      <CopyToClipboard
        onCopy={() => this.setState({ copied: true })}
        className={this.state.copied ? copied : notCopied}
        text={"ac99@rice.edu"}
      >
        <div className="left__about-link-text">
          <span>ac99@rice.edu</span>
          <FiClipboard className="left__icon_text" />
        </div>
      </CopyToClipboard>
    );
  };

  github = () => {
    return (
      <a
        href="https://www.github.com/achen1738"
        className="left__about-link-text left__about-link left__orange"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>Github</span>
        <FiLink className="left__icon_text" />
      </a>
    );
  };

  code = () => {
    return (
      <a
        href="https://www.github.com/achen1738/me"
        className="left__about-link-text left__about-link left__purple"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>Source Code</span>
        <FiLink className="left__icon_text" />
      </a>
    );
  };

  linkedin = () => {
    return (
      <a
        href="https://www.linkedin.com/in/arthur-chen-5402b9122/"
        className="left__about-link-text left__about-link left__orange"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>LinkedIn</span>
        <FiLink className="left__icon_text" />
      </a>
    );
  };

  render = () => {
    const linkStyle = "left__about-link";
    let resumeStyles = linkStyle + " left__red";
    let linkedInStyles = linkStyle + " left__orange";
    let emailStyles = linkStyle + " left__green";
    let githubStyles = linkStyle + " left__blue";
    let codeStyles = linkStyle + " left__purple";
    switch (parseInt(this.state.activeIndex)) {
      case 0:
        resumeStyles += " left__active_red";
        break;
      case 1:
        linkedInStyles += " left__active_orange";
        break;
      case 2:
        emailStyles += " left__active_green";
        break;
      case 3:
        githubStyles += " left__active_blue";
        break;
      case 4:
        codeStyles += " left__active_purple";
        break;
      default:
        break;
    }

    return (
      <div className="left">
        <div className="left__about">
          <div className="left__about-links-container">
            <div className="left__about-links">
              <div className={resumeStyles}>
                <FiFile
                  onClick={() => this.setIndex(0)}
                  className="left__icon left__icon_small"
                />
              </div>
              <div className={linkedInStyles}>
                <FiLinkedin
                  onClick={() => this.setIndex(1)}
                  className="left__icon left__icon_small"
                />
              </div>
              <div className={emailStyles}>
                <FiMail
                  onClick={() => this.setIndex(2)}
                  className="left__icon left__icon_small"
                />
              </div>

              <div className={githubStyles}>
                <FiGithub
                  onClick={() => this.setIndex(3)}
                  className="left__icon left__icon_small"
                />
              </div>
              <div className={codeStyles}>
                <FiCodepen
                  onClick={() => this.setIndex(4)}
                  className="left__icon left__icon_small"
                />
              </div>
            </div>
            {this.renderLinkText()}
          </div>
          <div className="left__name">Arthur Chen</div>
          <div className="left__description">
            Currently a rising-senior at{" "}
            <a
              className="left__description-link"
              href="https://www.rice.edu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Rice University
            </a>{" "}
            studying computer science. Worked at{" "}
            <a
              className="left__description-link"
              href="https://www.ibm.com/us-en/?ar=1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @IBM
            </a>{" "}
            this summer in Austin. Here are some things about me.
          </div>
          <a className="left__email" href="mailto:achen1738@gmail.com">
            Email Me!
          </a>
        </div>
      </div>
    );
  };
}

export default SideBar1;
