import React, { Component } from "react";
import {
  FiClipboard,
  FiDownload,
  FiGithub,
  FiFile,
  FiMail,
  FiLink
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
        className="left__about-link-text left__about-link left__red"
        download
      >
        <span>RESUME</span>
        <FiDownload className="left__icon_text" />
      </a>
    );
  };

  email = () => {
    let copied =
      "left__about-link-text left__about-link left__blue left__clipboard";
    let notCopied = "left__about-link-text left__about-link left__blue";
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
        className="left__about-link-text left__about-link left__teal"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>GITHUB</span>
        <FiLink className="left__icon_text" />
      </a>
    );
  };

  render = () => {
    const linkStyle = "left__about-link-text left__about-link";
    let resumeStyles = linkStyle + " left__red";
    let emailStyles = linkStyle + " left__blue";
    let githubStyles = linkStyle + " left__teal";
    switch (parseInt(this.state.activeIndex)) {
      case 0:
        resumeStyles += " left__active_red";
        break;
      case 1:
        emailStyles += " left__active_blue";
        break;
      case 2:
        githubStyles += " left__active_teal";
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
                  data-index={0}
                  onClick={e => this.setIndex(e)}
                  className="left__icon left__icon_small"
                />
              </div>
              <div className={emailStyles}>
                <FiMail
                  data-index={1}
                  onClick={e => this.setIndex(e)}
                  className="left__icon left__icon_small"
                />
              </div>

              <div className={githubStyles}>
                <FiGithub
                  data-index={2}
                  onClick={e => this.setIndex(e)}
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
            studying computer science. Working at{" "}
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
          <a className="left__email" href="mailto:ac99@rice.edu">
            Email Me!
          </a>
        </div>
      </div>
    );
  };
}

export default SideBar1;
