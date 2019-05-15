import React, { Component } from "react";
import styles from "./horizontalPublications.module.css";
import { FaInfoCircle, FaArrowRight } from "react-icons/fa";

class HorizontalPublications extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <div className={[styles.publication].join(" ")}>
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
        <div className={[styles.publication].join(" ")}>
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

        <div className={[styles.publication].join(" ")}>
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
        <div className={styles.publication}>
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
    );
  }
}

export default HorizontalPublications;
