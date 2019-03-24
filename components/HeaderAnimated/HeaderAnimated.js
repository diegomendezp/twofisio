import React from "react";
import HeaderAnimatedStyles from "../../PagesStyles/HeaderAnimatedStyles";
import { tween, styler, easing } from "popmotion";
import {_bubleAnimation} from '../../utils/animations'

class HeaderAnimated extends React.Component {

constructor(props) {
    super(props)
    this.props = props
}

_manageResize = () => {
  switch (true) {
    case window.innerWidth <= 375:
      _bubleAnimation(500, -250, 2, 2.05, 6, 6.2);
      break;
    case window.innerWidth <= 768:
      // _bubleAnimation(350, -100, 2.9, 3, 1.8, 2);
      break;
    default:
    _bubleAnimation(500, -250, 2, 2.05, 6, 6.2);
  }
};

  
  componentDidMount() {
    this._manageResize();
    window.addEventListener("resize", this._manageResize);
  }

  render() {

    return (
      <HeaderAnimatedStyles backImage={this.props.img} backPositionY={this.props.positionY}>
         {/* <img
            className="techniques-img"
            src={this.props.img}
            alt="fisioterapia-img"
          /> */}
          <svg id="container">
            <clipPath id="svgPath">
              <path id="target" d="M 115.7 -186.7 C 150 -158 177.8 -126 192.7 -89.2 C 207.7 -52.4 209.7 -11 207.2 32.2 C 204.7 75.3 197.6 120.2 174.7 157.3 C 151.8 194.5 113.1 223.9 67.7 242.9 C 22.3 261.9 -29.9 270.6 -74 255.9 C -118.1 241.1 -154.3 203.1 -189.1 163.5 C -224 124 -257.5 82.9 -258.3 40.5 C -259.2 -1.9 -227.4 -45.6 -203.5 -90.8 C -179.6 -136.1 -163.6 -182.9 -131 -212.3 C -98.4 -241.8 -49.2 -253.9 -4.2 -247.3 C 40.7 -240.7 81.5 -215.4 115.7 -186.7 Z" />
            </clipPath>
          </svg>
      </HeaderAnimatedStyles>
    );
  }


  
};
export default HeaderAnimated;
