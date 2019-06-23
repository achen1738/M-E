import React, { Component } from "react";
import { GO, SEM, Cells } from "../../../../../../images";
import styles from "./Research.module.css";
import { FaInfoCircle } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import {
  TopPublications,
  BottomPublications,
  HorizontalPublications
} from "../../index";

class Research extends Component {
  state = {};
  render() {
    let width = window.innerWidth;
    return (
      <>
        <div className={styles.imageContainer}>
          <div className={[styles.researchImage, styles.left].join(" ")}>
            <img src={SEM} alt="SEM" />
            <FaInfoCircle data-tip data-for="SEM" className={styles.topLeft} />
            <ReactTooltip place="right" id="SEM">
              <span>Scanning Electron Microscopy of Graphene</span>
              <br />
              <span>synthesized with Metal Nanoparticles</span>
            </ReactTooltip>
            {width > 480 ? <TopPublications /> : null}
          </div>
          <div className={[styles.middleImageContainer].join(" ")}>
            <div className={[styles.middleImage].join(" ")}>
              <img src={GO} alt="Graphene Oxide" />
              <FaInfoCircle data-tip data-for="go" className={styles.center} />
              <ReactTooltip place="right" id="go">
                <span>Chemical Structure of Graphene Oxide</span>
              </ReactTooltip>
            </div>
          </div>
          <div className={[styles.researchImage, styles.right].join(" ")}>
            <img className={[].join(" ")} src={Cells} alt="Cells with Pt GO" />
            <FaInfoCircle
              data-tip
              data-for="cells"
              className={styles.bottomRight}
            />
            <ReactTooltip place="left" id="cells">
              <span>Dermal Fibroblast Cells plated with Graphene.</span>
            </ReactTooltip>
            {width > 480 ? <BottomPublications /> : null}
          </div>
        </div>
        {width < 480 ? <HorizontalPublications /> : null}
      </>
    );
  }
}

export default Research;
