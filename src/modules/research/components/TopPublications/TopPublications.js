import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./TopPublications.scss";

class TopPublications extends Component {
  state = {};
  render() {
    return (
      <div className="research__publications_top">
        <div className="research-mid-top">
          <a
            className="research__publication"
            href="https://www.researchgate.net/publication/285982063_Optimizing_Reduced_Graphene_Oxide_with_Metallic_Nanoparticles_for_Increasing_the_Efficiency_of_Proton_Exchange_Membrane_Fuel_Cells"
            rel="noopener noreferrer"
            target="_blank"
          >
            Hydrogen Fuel Cell
            <FaArrowRight className="research__icon_arrow" />
          </a>
        </div>
        <div className="research-mid-right-position">
          <div className="research-mid-bot">
            <a
              className="research__publication"
              href="https://www.researchgate.net/publication/292950631_Synthesis_and_Characterization_of_Partially_Reduced_Graphene_Oxide_and_Platinum_and_Gold_Partially_Reduced_Graphene_Oxide"
              rel="noopener noreferrer"
              target="_blank"
            >
              Graphene Synthesis
              <FaArrowRight className="research__icon_arrow" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopPublications;
