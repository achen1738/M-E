import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./BottomPublications.scss";
class BottomPublications extends Component {
  state = {};
  render() {
    return (
      <div className="research__publications_bot">
        <div className="research-mid-left">
          <a
            className="research__publication"
            href="https://www.researchgate.net/publication/290508359_The_Effect_of_Graphene_OxideReduced_Graphene_Oxide_Functionalized_with_Metal_Nanoparticles_on_Dermal_Bacterial_and_CancerousNon-Cancerous_Epidermal_Cells"
            rel="noopener noreferrer"
            target="_blank"
          >
            Skin and Bacterial Cells
            <FaArrowRight className="research__icon_arrow" />
          </a>
        </div>
        <div className="research-mid-bot-position">
          <div className="research-mid-bot">
            <a
              className="research__publication"
              href="https://www.researchgate.net/publication/283154112_Creating_Metal_Nanoparticle-Reduced_Graphene_Oxide_Sheets_by_a_Simple_Desktop_Method"
              rel="noopener noreferrer"
              target="_blank"
            >
              Graphene-Nanoparticles
              <FaArrowRight className="research__icon_arrow" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomPublications;
