import React from "react";
import HeaderAnimatedStyles from "../PagesStyles/HeaderAnimatedStyles.js";
import { tween, styler, easing } from "popmotion";


class HeaderAnimated extends React.Component {

constructor(props) {
    super(props)
    this.props = props
}
  
  componentDidMount() {
    tween({
      from: { scaleY: 2, scaleX: 1.8 },
      to: { scaleY: 2.2, scaleX: 1.85 },
      duration: 1800,
      ease: easing.easeInOut,
      flip: Infinity
    }).start(v => {
      if (document.getElementById("target") !== null) {
        document.getElementById(
          "target"
        ).style.transform = `translate(700px, -300px) scaleY(${v.scaleY}) scaleX(4)`;
      }
    })
  }

  render() {

    return (
      <React.Fragment>
         <img
            className="techniques-img"
            src="../static/imgFisioterapia.jpg"
            alt="fisioterapia-img"
          />
          <svg id="container">
            <clipPath id="svgPath">
              <path id="target" d="M 115.7 -186.7 C 150 -158 177.8 -126 192.7 -89.2 C 207.7 -52.4 209.7 -11 207.2 32.2 C 204.7 75.3 197.6 120.2 174.7 157.3 C 151.8 194.5 113.1 223.9 67.7 242.9 C 22.3 261.9 -29.9 270.6 -74 255.9 C -118.1 241.1 -154.3 203.1 -189.1 163.5 C -224 124 -257.5 82.9 -258.3 40.5 C -259.2 -1.9 -227.4 -45.6 -203.5 -90.8 C -179.6 -136.1 -163.6 -182.9 -131 -212.3 C -98.4 -241.8 -49.2 -253.9 -4.2 -247.3 C 40.7 -240.7 81.5 -215.4 115.7 -186.7 Z" />
            </clipPath>
          </svg>
      </React.Fragment>
    );
  }


  
};
export default HeaderAnimated;
