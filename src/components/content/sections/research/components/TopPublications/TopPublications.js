import React, { Component } from "react";
import styles from "../../containers/Research/Research.module.css";
import { FaArrowRight } from "react-icons/fa";

class TopPublications extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default TopPublications;
