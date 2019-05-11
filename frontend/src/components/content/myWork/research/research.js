import React, { Component } from "react";
import GO from "../../../../images/go.jpg";
import SEM from "../../../../images/sem.jpg";
import Cells from "../../../../images/cells.jpg";
import styles from "./research.module.css";
import { FaInfoCircle, FaArrowRight } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

class Research extends Component {
  state = {};
  render() {
    return (
      <div className={styles.imageContainer}>
        <div className={[styles.researchImage, styles.left].join(" ")}>
          <img src={SEM} alt="SEM" />
          <FaInfoCircle data-tip data-for="SEM" className={styles.topLeft} />
          <ReactTooltip place="right" id="SEM">
            <span>Scanning Electron Microscopy of Graphene</span>
            <br />
            <span>synthesized with Metal Nanoparticles</span>
          </ReactTooltip>
          <div className={styles.topPublicationGrid}>
            <div className={[styles.midTopPub].join(" ")}>
              <a
                className={styles.publication}
                href="https://www.researchgate.net/publication/285982063_Optimizing_Reduced_Graphene_Oxide_with_Metallic_Nanoparticles_for_Increasing_the_Efficiency_of_Proton_Exchange_Membrane_Fuel_Cells"
                rel="noopener noreferrer"
                target="_blank"
              >
                Hydrogen Fuel Cell
                <FaArrowRight className={styles.arrowIcon} />
              </a>
            </div>
            <div className={[styles.midRightPos].join(" ")}>
              <div className={styles.midRightPub}>
                <a
                  className={styles.publication}
                  href="https://www.researchgate.net/publication/292950631_Synthesis_and_Characterization_of_Partially_Reduced_Graphene_Oxide_and_Platinum_and_Gold_Partially_Reduced_Graphene_Oxide"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Graphene Synthesis
                  <FaArrowRight className={styles.arrowIcon} />
                </a>
              </div>
            </div>
          </div>
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
          <div className={styles.botPublicationGrid}>
            <div className={[styles.midLeftPub].join(" ")}>
              <a
                className={styles.publication}
                href="https://www.researchgate.net/publication/290508359_The_Effect_of_Graphene_OxideReduced_Graphene_Oxide_Functionalized_with_Metal_Nanoparticles_on_Dermal_Bacterial_and_CancerousNon-Cancerous_Epidermal_Cells"
                rel="noopener noreferrer"
                target="_blank"
              >
                Skin and Bacterial Cells
                <FaArrowRight className={styles.arrowIcon} />
              </a>
            </div>
            <div className={styles.midBotPos}>
              <div className={styles.midBotPub}>
                <a
                  className={styles.publication}
                  href="https://www.researchgate.net/publication/283154112_Creating_Metal_Nanoparticle-Reduced_Graphene_Oxide_Sheets_by_a_Simple_Desktop_Method"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Graphene-Nanoparticles
                  <FaArrowRight className={styles.arrowIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Research;
