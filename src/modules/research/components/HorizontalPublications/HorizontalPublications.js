import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./HorizontalPublications.scss";

class HorizontalPublications extends Component {
  state = {
    links: [
      {
        href:
          "https://www.researchgate.net/publication/285982063_Optimizing_Reduced_Graphene_Oxide_with_Metallic_Nanoparticles_for_Increasing_the_Efficiency_of_Proton_Exchange_Membrane_Fuel_Cells",
        text: "Hydrogen Fuel Cell"
      },
      {
        href:
          "https://www.researchgate.net/publication/292950631_Synthesis_and_Characterization_of_Partially_Reduced_Graphene_Oxide_and_Platinum_and_Gold_Partially_Reduced_Graphene_Oxide",
        text: "            Graphene Synthesis            "
      },
      {
        href:
          "https://www.researchgate.net/publication/292950631_Synthesis_and_Characterization_of_Partially_Reduced_Graphene_Oxide_and_Platinum_and_Gold_Partially_Reduced_Graphene_Oxide",
        text: "            Skin and Bacterial Cells              "
      },
      {
        href:
          "https://www.researchgate.net/publication/283154112_Creating_Metal_Nanoparticle-Reduced_Graphene_Oxide_Sheets_by_a_Simple_Desktop_Method",
        text: "            Graphene-Nanoparticles              "
      }
    ]
  };

  renderPublications = () => {
    return this.state.links.map((link, index) => {
      return (
        <div key={index} className="horizontal__publication">
          <a href={link.href} rel="noopener noreferrer" target="_blank">
            {link.text}
            <FaArrowRight />
          </a>
        </div>
      );
    });
  };

  render() {
    return <div className="horizontal">{this.renderPublications()}</div>;
  }
}

export default HorizontalPublications;
