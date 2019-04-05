import React, { Component } from "react";
import { HomeWrapperStyle } from "../../PagesStyles/HomeStyle";
import { tween, styler, easing } from "popmotion";
import { interpolate } from "flubber"; // ES6
import SectionTitle from "./SectionTitle";
import HomeText from "../../content/home.json";
import $ from "jquery";
import Bubbles from "./Bubles";
import { _bubleAnimation, detectmob } from "../../utils/animations";
import ReactPageScroller from "react-page-scroller";

const images = [
  "../../static/imgFisioterapia.jpg",
  "../../static/imgTratamientos.jpg",
  "../../static/imgEcografia.jpg",
  "../../static/imgPilates.jpg"
];

var interval;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: undefined,
      vw: undefined,
      vh: undefined,
      animation: undefined,
      formPosition: 1,
      bubblePosition: 1,
      count: 0,
      form2: [
        "M 150.9 -224.2 C 196.3 -205.7 234.1 -165 246.2 -118.4 C 258.2 -71.8 244.4 -19.3 234.1 31.7 C 223.8 82.8 216.9 132.4 189.6 164.8 C 162.3 197.2 114.5 212.3 66.4 226.7 C 18.2 241.2 -30.3 254.9 -72.7 244.1 C -115.1 233.2 -151.2 197.8 -173.1 158.1 C -194.9 118.3 -202.4 74.2 -209.2 29.8 C -216 -14.6 -222.2 -59.5 -211 -101.5 C -199.8 -143.5 -171.3 -182.8 -133.2 -204.6 C -95.2 -226.4 -47.6 -230.7 2.6 -234.8 C 52.8 -238.8 105.6 -242.7 150.9 -224.2 Z",
        "M 115.7 -186.7 C 150 -158 177.8 -126 192.7 -89.2 C 207.7 -52.4 209.7 -11 207.2 32.2 C 204.7 75.3 197.6 120.2 174.7 157.3 C 151.8 194.5 113.1 223.9 67.7 242.9 C 22.3 261.9 -29.9 270.6 -74 255.9 C -118.1 241.1 -154.3 203.1 -189.1 163.5 C -224 124 -257.5 82.9 -258.3 40.5 C -259.2 -1.9 -227.4 -45.6 -203.5 -90.8 C -179.6 -136.1 -163.6 -182.9 -131 -212.3 C -98.4 -241.8 -49.2 -253.9 -4.2 -247.3 C 40.7 -240.7 81.5 -215.4 115.7 -186.7 Z",
        "M 93.9 -104.7 C 135.9 -76.6 194 -60.5 203.7 -32 C 213.4 -3.5 174.7 37.5 141.3 68.7 C 108 99.9 80 121.4 52 122.9 C 24.1 124.4 -3.9 105.9 -52.2 105 C -100.6 104.1 -169.4 120.8 -197.2 100.4 C -225.1 80 -212 22.4 -195.9 -28.6 C -179.8 -79.6 -160.6 -124 -127.4 -153.7 C -94.3 -183.4 -47.1 -198.2 -10.6 -185.5 C 25.9 -172.9 51.9 -132.8 93.9 -104.7 Z",
        "M 183.6 -174.4 C 230.9 -136.2 257.5 -68.1 245.2 -12.3 C 232.9 43.6 181.9 87.2 134.5 127.5 C 87.2 167.9 43.6 204.9 -6.2 211.2 C -56.1 217.4 -112.2 192.9 -149.9 152.5 C -187.5 112.2 -206.8 56.1 -207.9 -1.2 C -209.1 -58.5 -192.2 -116.9 -154.6 -155.1 C -116.9 -193.2 -58.5 -211.1 4.8 -216 C 68.1 -220.8 136.2 -212.6 183.6 -174.4 Z",
        "M 154 -190.7 C 194.1 -150 217.2 -96.2 216.5 -46.1 C 215.9 3.9 191.5 50.2 159.7 80 C 128 109.8 88.8 123 50.1 136.5 C 11.5 150 -26.6 163.8 -66.3 159.3 C -106 154.7 -147.4 131.9 -169.6 96.4 C -191.8 61 -194.9 13.1 -183.1 -28.6 C -171.4 -70.3 -144.8 -105.6 -111.8 -147.6 C -78.8 -189.6 -39.4 -238.3 8.8 -248.8 C 57 -259.3 114 -231.5 154 -190.7 Z"
      ],
      form: [
        "M 200 200m -75 0a 75 75 0 1 0 150 0a 75 75 0 1 0 -150 0",
        "M 43.5703 34 C 115.977 -36.9719 237.588 40.7602 338.504 34 C 436.992 27.4024 584.269 -28.7116 623.167 20.0936 C 662.065 68.8988 600.451 177.68 602.012 281.32 C 603.64 389.403 654.491 511.401 602.012 586 C 532.926 586 158.625 587 31 586 C -29.2288 527.147 17.9491 394.039 22 296.215 C 26.729 182.016 -33.4904 109.534 43.5703 34 Z",
        "M 82.9297 0.177734 C 175.391 0.177734 514.086 0.177734 611.617 0.177734 C 705.69 58.498 705.581 197.178 707.544 265.501 C 709.592 336.753 744.92 430.818 678.912 479.996 C 599.359 539.265 468.354 519.324 360.813 525.922 C 197.377 535.949 112.529 548.1 35 479.996 C -34.375 419.055 23.1953 348.466 23.1953 266.966 C 23.1953 191.551 -13.9983 49.9723 82.9297 0.177734 Z",
        "M 75.1844 1 C 170.356 -1.99840e-15 579.113 1.44444 655.384 1 C 702.032 52.9773 670.102 148.623 671.974 259 C 673.927 374.107 734.909 489.73 671.974 569.178 C 577.486 569.178 151.391 569.178 38.9624 569.178 C -33.2669 506.499 17.1678 392.724 22.0259 288.541 C 27.6971 166.92 -17.2306 81.443 75.1844 1 Z",
        "M 82.9297 0.177734 C 175.391 0.177734 514.086 0.177734 611.617 0.177734 C 705.69 58.498 705.581 197.178 707.544 265.501 C 709.592 336.753 744.92 430.818 678.912 479.996 C 599.359 539.265 468.354 519.324 360.813 525.922 C 197.377 535.949 112.529 548.1 35 479.996 C -34.375 419.055 23.1953 348.466 23.1953 266.966 C 23.1953 191.551 -13.9983 49.9723 82.9297 0.177734 Z"
      ]
    };
  }

  _makeAnimation = (from, to) => {
    tween({
      duration: 1500,
      ease: easing.easeInOut
    })
      .pipe(
        interpolate(this.state.form[from], this.state.form[to], {
          maxSegmentLength: 2
        })
      )
      .start(styler(document.querySelector("#target")).set("d"));
  };

  _getEventTarget = e => {
    e = e || window.event;
    return e.target || e.srcElement;
  };

  _listenSliderButtons = () => {
    let listItems = document.querySelectorAll("ul li");
    listItems.forEach((item, i) => {
      item.onclick = e => {
        if (i !== 5) {
          this._changeSVGForm("down", "slider", i - 1);
          this.setState({ ...this.state, formPosition: i, bubblePosition: i });
        } else {
          this._changeSVGForm("down", "slider", i - 2);
          this.setState(
            { ...this.state, formPosition: 4, bubblePosition: 5 },
            () => {
              document.getElementsByTagName("body")[0].style.position =
                "relative";
              this._changeBubble(4);
              window.scrollTo(0, 800);
            }
          );
        }
      };
    });
  };

  pageOnChange = number => {
    console.log(number, this.state.bubblePosition);

    if (number > this.state.bubblePosition) {
      if (number === 5) {
        document.getElementsByTagName("body")[0].style.position = "relative";
        window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
        this.setState({
          ...this.state,
          bubblePosition: number
        });
      } else {
        this._changeSVGForm("down");
        this.setState({
          ...this.state,
          formPosition: number,
          bubblePosition: number
        });
      }
    } else {
      if (number === 4) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        this.setState({
          ...this.state,
          bubblePosition: number
        });
      } else {
        this._changeSVGForm("up");

        this.setState({
          ...this.state,
          formPosition: number,
          bubblePosition: number
        });
      }
    }
  };
  
  _mobileTouchMove = () => {

    var ts;
    $(document).bind("touchstart", e => {
      ts = e.originalEvent.touches[0].clientY;
    });

    $(document).bind("touchend", e => {
      var te = e.originalEvent.changedTouches[0].clientY;
      if (ts > te + 5) {
        if (this.state.bubblePosition === 4) {
          document.getElementsByTagName("body")[0].style.position = "relative";
          window.scrollTo({ top: 3000, left: 0, behavior: "smooth" });
          this.setState({
            ...this.state,
            bubblePosition: 5
          });
        } else {
          this._changeSVGForm("down");
        }
      } else if (ts < te - 5) {
        if (this.state.bubblePosition !== 1) {
          if (this.state.bubblePosition === 5) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            document.getElementsByTagName("body")[0].style.position = "fixed";
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            this.setState({
              ...this.state,
              bubblePosition: 4
            });
          } else {
            this._changeSVGForm("up");
          }
        }
      }
    });
  };
  

  _scrollEvent = () => { 
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this._mobileTouchMove()
     } else {
      this._mouseWheelDesktop()
     }
  }

  _mouseWheelDesktop = () => {

    var delta = 0

    const wheelEvent =
      "onwheel" in document.createElement("div")
        ? "wheel" // Modern browsers support "wheel"
        : document.onmousewheel !== undefined
        ? "mousewheel" // Webkit and IE support at least "mousewheel"
        : "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

    if (detectmob()) {
      var scrollPos = 0;
      var timerId;
      $(window).bind("scroll", () => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          if (this.state.formPosition < 4) {
            this._changeSVGForm("down");
          } else {
            this.setState(
              { ...this.state, formPosition: 1, bubblePosition: 1 },
              () => this._changeBubble(0)
            );
          }
        }, 200);
      });
    } else {
      $(window).on(wheelEvent, e => {
        if (e.originalEvent.wheelDelta > 0) {
          // document.getElementsByTagName("body")[0].style.overflowY = "hidden";
          delta++;
          if (delta >= 10) {
            delta = 0;
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            if (this.state.bubblePosition === 5) {
              this._changeBubble(3);
            }

            if (this.state.formPosition > 1) {
              if (this.state.bubblePosition !== 5) {
                this._changeSVGForm("up");
              } else {
                this.setState({ ...this.state, bubblePosition: 4 }, () => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  setTimeout(() => {
                    document.getElementsByTagName("body")[0].style.position =
                      "fixed";
                  }, 1000);
                });
              }
            }
          }
        } else {
          delta--;
          if (delta <= -10) {
            delta = 0;
            if (this.state.formPosition < 4) {
              this._changeSVGForm("down");
            } else {
              this.setState({ ...this.state, bubblePosition: 5 }, () => {
                document.getElementsByTagName("body")[0].style.position =
                  "relative";
                this._changeBubble(4);
                window.scrollTo({ top: 1000, left: 0, behavior: "smooth" });
              });
            }
          }
        }
      });
    }
  };

  _changeBubble(pos) {
    document.querySelectorAll(".bubble").forEach((div, i) => {
      if (i === pos) {
        document.querySelectorAll(".bubble")[pos].className = "bubble active";
      } else {
        document.querySelectorAll(".bubble")[i].className = "bubble";
      }
    });
  }

  _changeSVGForm = (direction, type = "default", fromTo) => {
    this.setState(
      {
        ...this.state,
        prevPosition: this.state.formPosition,
        formPosition:
          type === "default"
            ? direction === "down"
              ? this.state.formPosition + 1
              : this.state.formPosition - 1
            : fromTo + 1,
        bubblePosition:
          type === "default"
            ? direction === "down"
              ? this.state.bubblePosition + 1
              : this.state.bubblePosition - 1
            : fromTo + 1
      },
      () => {
        this._changeBubble(this.state.formPosition - 1);
        this._makeAnimation(this.state.prevPosition, this.state.formPosition);
      }
    );
  };

  _startAnimation(target) {
    this.state.animation.start(styler(document.querySelector(target)).set("d"));
  }

  _manageResize = () => {
    switch (true) {
      case window.innerWidth <= 375:
        _bubleAnimation(190, 200, 2, 2.2, 1.8, 2, -100, -200);
        break;
      case window.innerWidth <= 414:
        _bubleAnimation(200, 210, 2.3, 3, 3.1, 3.2, -200, -400);
        break;
      case window.innerWidth <= 768:
        _bubleAnimation(400, 410, 2.3, 3, 3.1, 3.2, -200, -400);
        break;
      default:
        const posX = window.innerWidth / 3;
        _bubleAnimation(posX, posX + 10, 3, 3.1, 3.1, 3.2, -200, -400);
    }
  };

  componentDidMount() {
    //this._listenSliderButtons();
    this._scrollEvent();
    this._manageResize();

    window.addEventListener("resize", this._manageResize);

    // if (window.innerWidth <= 768) {
    //   interval = setInterval(() => {
    //     if (this.state.formPosition < 4) {
    //       this._changeSVGForm("down");
    //     } else {
    //       this.setState({...this.state, formPosition:1})
    //     }
    //   }, 5000);
    // }

    this.setState(
      {
        ...this.state,
        shape: styler(document.querySelector("#target")),
        vw: window.innerWidth,
        vh: window.innerHeight,
        bodyHome: document.querySelector("#bodyHome"),
        animation: tween({
          duration: 1000,
          ease: easing.easeInOut
        }).pipe(
          interpolate(
            this.state.form[this.state.formPosition - 1],
            this.state.form[this.state.formPosition],
            { maxSegmentLength: 2 }
          )
        )
      },
      () => {
        // disableBodyScroll(this.state.bodyHome);
        this._startAnimation("#target");
      }
    );
  }

  render() {
    return (
      <HomeWrapperStyle id="bodyHome">
      <Bubbles position={this.state.bubblePosition} />
      {/* <CrossfadeImage
        src={
          images[this.state.formPosition < 5 && this.state.formPosition - 1]
        }
        duration={1500}
        timingFunction={"ease-out"}
      /> */}
      <img
        src={
          images[this.state.formPosition < 5 && this.state.formPosition - 1]
        }
      />

      <svg id="container">
        <clipPath id="svgPath">
          <path id="target" />
        </clipPath>

      </svg>

      <SectionTitle
        duration={500}
        timingFunction={"ease"}
        {...HomeText[
          this.state.formPosition < 5 && this.state.formPosition - 1
        ]}
      />
</HomeWrapperStyle>
    );
  }
}
