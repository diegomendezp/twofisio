import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

import FontRegular from "../PagesStyles/FontStyle/FontRegular.js"


export class Member extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false };
  }

  rotateImage = id => {
    !this.state.open
      ? (document.getElementById(id).style.webkitTransform = "rotate(180deg)")
      : (document.getElementById(id).style.webkitTransform = "rotate(0deg)");
      const open = !this.state.open;
      this.setState({... this.state, open})
  };
  displayCurriculum = curriculum => {
    return curriculum.map((element, i) => (
      <AccordionItemBody key={i}>- {element}</AccordionItemBody>
    ));
  };

  render() {
    const {name, number, curriculum, photo} = this.props;
    return (
      <div className="member">
        <img
          className="member-img"
          src={photo}
          alt={`${name}-photo`}
        />
        <Accordion>
          <AccordionItem
            onClick={() => {
              this.rotateImage(`up-down-icon-${name}`);
            }}
          >
            <AccordionItemTitle>
              <div className="member-info">
                <p className="member-name">{name}</p>
                <FontRegular className="member-cole">NºColegiado: {number}</FontRegular>
              </div>
              <img
                src="../../static/iconUpdown.svg"
                alt="up-down-icon"
                id={`up-down-icon-${name}`}
              />
            </AccordionItemTitle>
            {this.displayCurriculum(curriculum)}
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}
