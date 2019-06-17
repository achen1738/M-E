import React, { Component } from "react";
import styles from "./Research.module.css";
import { FaArrowRight } from "react-icons/fa";

class BottomPublications extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default BottomPublications;
