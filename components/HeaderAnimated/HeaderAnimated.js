import React from "react";
import HeaderAnimatedStyles from "../../PagesStyles/HeaderAnimatedStyles";
import { tween, styler, easing } from "popmotion";
import { interpolate } from "flubber"; // ES6
import {_bubleAnimation} from '../../utils/animations'

const star = "M 200 200m -75 0a 75 75 0 1 0 150 0a 75 75 0 1 0 -150 0"
const circle =  "M 43.5703 34 C 115.977 -36.9719 237.588 40.7602 338.504 34 C 436.992 27.4024 584.269 -28.7116 623.167 20.0936 C 662.065 68.8988 600.451 177.68 602.012 281.32 C 603.64 389.403 654.491 511.401 602.012 586 C 532.926 586 158.625 587 31 586 C -29.2288 527.147 17.9491 394.039 22 296.215 C 26.729 182.016 -33.4904 109.534 43.5703 34 Z"



class HeaderAnimated extends React.Component {

constructor(props) {
    super(props)
    this.props = props
}




_manageResize = () => {


  

  // _bubleAnimation(-100, 0, 5, 5.2);
  // switch (true) {
  //   case window.innerWidth <= 375:
  //     _bubleAnimation(500, -250, 2, 2.05, 6, 6.2);
  //     break;
  //   case window.innerWidth <= 768:
  //     // _bubleAnimation(350, -100, 2.9, 3, 1.8, 2);
  //     break;
  //   default:
  //   _bubleAnimation(500, -250, 2, 2.05, 6, 6.2);
  // }
};

  
  componentDidMount() {

    // this._manageResize();

    tween({
      duration: 700,
      ease: easing.easeInOut,
      flip: Infinity
    }).pipe(interpolate(circle, star, { maxSegmentLength: 2 }))
    .start(styler(document.querySelector("#target")).set("d"));

    // tween({
    //   from: { transalteX: -100, scale: 5 },
    //   to: { transalteX: 0, scale: 5.2 },
    //   duration: 1800,
    //   ease: easing.easeInOut,
    //   flip: Infinity
    // }).start(v => {
    //   if (document.getElementById("target") !== null) {
    //     document.getElementById("target").style.webkitTransform = `translate(${v.transalteX}px, -300px) scale(${v.scale})`;
    //     // document.getElementById("target").style.webkitTransform = `scaleY(${v.scaleY})`;
    //     // document.getElementById("target").style.MozTransform = `translate(${500}px, ${-250}px) scale(${v.scaleX})`;
    //   }
    // });

    // this._manageResize();
    // window.addEventListener("resize", this._manageResize);
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
              <path id="target" />
              </clipPath>
            </svg>
          {/* <svg id="container">
            <clipPath id="svgPath">
            <path id="target" d= "M 93.9 -104.7 C 135.9 -76.6 194 -60.5 203.7 -32 C 213.4 -3.5 174.7 37.5 141.3 68.7 C 108 99.9 80 121.4 52 122.9 C 24.1 124.4 -3.9 105.9 -52.2 105 C -100.6 104.1 -169.4 120.8 -197.2 100.4 C -225.1 80 -212 22.4 -195.9 -28.6 C -179.8 -79.6 -160.6 -124 -127.4 -153.7 C -94.3 -183.4 -47.1 -198.2 -10.6 -185.5 C 25.9 -172.9 51.9 -132.8 93.9 -104.7 Z"/>
            </clipPath>
          </svg> */}
      </HeaderAnimatedStyles>
    );
  }


  
};
export default HeaderAnimated;
