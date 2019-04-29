import React from "react";
import HeaderAnimatedStyles from "../../PagesStyles/HeaderAnimatedStyles";
import { _bubleAnimation } from "../../utils/animations";

const star = "M 200 200m -75 0a 75 75 0 1 0 150 0a 75 75 0 1 0 -150 0";
const circle =
  "M 43.5703 34 C 115.977 -36.9719 237.588 40.7602 338.504 34 C 436.992 27.4024 584.269 -28.7116 623.167 20.0936 C 662.065 68.8988 600.451 177.68 602.012 281.32 C 603.64 389.403 654.491 511.401 602.012 586 C 532.926 586 158.625 587 31 586 C -29.2288 527.147 17.9491 394.039 22 296.215 C 26.729 182.016 -33.4904 109.534 43.5703 34 Z";

class HeaderAnimated extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  _manageResize = () => {
    switch (true) {
      case window.innerWidth <= 375:
        _bubleAnimation(200, 210, 2.3, 3, 2.8, 3, -40, -51);
        break;
      case window.innerWidth <= 414:
        _bubleAnimation(200, 210, 2.3, 3, 3.1, 3.2, -100, -100);
        break;
      case window.innerWidth <= 768:
        _bubleAnimation(550, 560, 3, 3.4, 3.1, 3.2, 5, 10);
        break;
      case window.innerWidth <= 1024:
        _bubleAnimation(550, 560, 10, 15, 3.1, 3.2, 25, 15);
        break;
      case window.innerWidth <= 1440:
        _bubleAnimation(550, 560, 10, 15, 3.45 , 3.51, 100, 100);
        break;
      default:
        _bubleAnimation(500, 500, 10, 10.2, 3.1, 3.2, 150, 150);
    }
  };

  componentDidMount() {
    this._manageResize();
    window.addEventListener("resize", this._manageResize);
  }

  render() {
    return (
      <HeaderAnimatedStyles
        backImage={this.props.img}
        backPositionY={this.props.positionY}
      >
        <svg id="container">
          <clipPath id="svgPath">
            <path
              id="target"
              d="M 93.9 -104.7 C 135.9 -76.6 194 -60.5 203.7 -32 C 213.4 -3.5 174.7 37.5 141.3 68.7 C 108 99.9 80 121.4 52 122.9 C 24.1 124.4 -3.9 105.9 -52.2 105 C -100.6 104.1 -169.4 120.8 -197.2 100.4 C -225.1 80 -212 22.4 -195.9 -28.6 C -179.8 -79.6 -160.6 -124 -127.4 -153.7 C -94.3 -183.4 -47.1 -198.2 -10.6 -185.5 C 25.9 -172.9 51.9 -132.8 93.9 -104.7 Z"
            />
          </clipPath>
        </svg>
      </HeaderAnimatedStyles>
    );
  }
}
export default HeaderAnimated;
