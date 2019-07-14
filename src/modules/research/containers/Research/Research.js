import React, { Component } from "react";
import { GO, SEM, Cells } from "../../../../images";
import { FaInfoCircle } from "react-icons/fa";
import "./Research.scss";
import ReactTooltip from "react-tooltip";
import BottomPublications from "../../components/BottomPublications";
import TopPublications from "../../components/TopPublications";
import HorizontalPublications from "../../components/HorizontalPublications";
class Research extends Component {
  state = {};
  render() {
    let width = window.innerWidth;
    return (
      <>
        <div className="research__image">
          <div className="research__image_research research__image_left">
            <img src={SEM} alt="SEM" />
            <FaInfoCircle
              data-tip
              data-for="SEM"
              className="research__top-left"
            />
            <ReactTooltip place="right" id="SEM">
              <span>Scanning Electron Microscopy of Graphene</span>
              <br />
              <span>synthesized with Metal Nanoparticles</span>
            </ReactTooltip>
            {width > 480 ? <TopPublications /> : null}
          </div>
          <div className="research__image_middle-container">
            <div className="research__image_middle">
              <img src={GO} alt="Graphene Oxide" />
              <div className="research__center">
                <ReactTooltip place="right" id="go">
                  <span>Chemical Structure of Graphene Oxide</span>
                </ReactTooltip>
              </div>
            </div>
          </div>
          <div className="research__image_research research__image_right">
            <img src={Cells} alt="Cells with Pt GO" />
            <FaInfoCircle
              data-tip
              data-for="cells"
              className="research__bottom-right"
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
