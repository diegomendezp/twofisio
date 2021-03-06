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

const _ = require("lodash");

const images = [
  `${process.env.ASSET_PREFIX}/static/imgFisioterapia6.jpg`,
  `${process.env.ASSET_PREFIX}/static/imgTratamientos.jpg`,
  `${process.env.ASSET_PREFIX}/static/imgEcografia5.jpg`,
  `${process.env.ASSET_PREFIX}/static/imgPilates4.jpg`,
  `${process.env.ASSET_PREFIX}/static/nosotros.jpg`
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
      scroll: true,
      form: [
        "M 200 200m -75 0a 75 75 0 1 0 150 0a 75 75 0 1 0 -150 0",
        "M 43.5703 34 C 115.977 -36.9719 237.588 40.7602 338.504 34 C 436.992 27.4024 584.269 -28.7116 623.167 20.0936 C 662.065 68.8988 600.451 177.68 602.012 281.32 C 603.64 389.403 654.491 511.401 602.012 586 C 532.926 586 158.625 587 31 586 C -29.2288 527.147 17.9491 394.039 22 296.215 C 26.729 182.016 -33.4904 109.534 43.5703 34 Z",
        "M 82.9297 0.177734 C 175.391 0.177734 514.086 0.177734 611.617 0.177734 C 705.69 58.498 705.581 197.178 707.544 265.501 C 709.592 336.753 744.92 430.818 678.912 479.996 C 599.359 539.265 468.354 519.324 360.813 525.922 C 197.377 535.949 112.529 548.1 35 479.996 C -34.375 419.055 23.1953 348.466 23.1953 266.966 C 23.1953 191.551 -13.9983 49.9723 82.9297 0.177734 Z",
        "M 75.1844 1 C 170.356 -1.99840e-15 579.113 1.44444 655.384 1 C 702.032 52.9773 670.102 148.623 671.974 259 C 673.927 374.107 734.909 489.73 671.974 569.178 C 577.486 569.178 151.391 569.178 38.9624 569.178 C -33.2669 506.499 17.1678 392.724 22.0259 288.541 C 27.6971 166.92 -17.2306 81.443 75.1844 1 Z",
        "M 82.9297 0.177734 C 175.391 0.177734 514.086 0.177734 611.617 0.177734 C 705.69 58.498 705.581 197.178 707.544 265.501 C 709.592 336.753 744.92 430.818 678.912 479.996 C 599.359 539.265 468.354 519.324 360.813 525.922 C 197.377 535.949 112.529 548.1 35 479.996 C -34.375 419.055 23.1953 348.466 23.1953 266.966 C 23.1953 191.551 -13.9983 49.9723 82.9297 0.177734 Z",
        "M 82.9297 0.177734 C 175.391 0.177734 514.086 0.177734 611.617 0.177734 C 705.69 58.498 705.581 197.178 707.544 265.501 C 709.592 336.753 744.92 430.818 678.912 479.996 C 599.359 539.265 468.354 519.324 360.813 525.922 C 197.377 535.949 112.529 548.1 35 479.996 C -34.375 419.055 23.1953 348.466 23.1953 266.966 C 23.1953 191.551 -13.9983 49.9723 82.9297 0.177734 Z",
      ], 
      images: [...images]
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
        if (i !== 6) {
          this._changeSVGForm("down", "slider", i - 1);
          this.setState({ ...this.state, formPosition: i, bubblePosition: i });
        } else {
          this._changeSVGForm("down", "slider", i - 2);
          this.setState(
            { ...this.state, formPosition: 5, bubblePosition: 6 },
            () => {
              document.getElementsByTagName("body")[0].style.position =
                "relative";
              this._changeBubble(5);
              window.scrollTo(0, 800);
            }
          );
        }
      };
    });
  };

  pageOnChange = number => {

    if (number > this.state.bubblePosition) {
      if (number === 6) {
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
      if (number === 5) {
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
    if (window.location.pathname === "/") {
      var ts;
      $(document).bind("touchstart", e => {
        ts = e.originalEvent.touches[0].clientY;
      });

      $(document).bind("touchend", e => {
        var te = e.originalEvent.changedTouches[0].clientY;
        if (ts > te + 6) {
          if (this.state.bubblePosition < 6) {
            if (this.state.bubblePosition === 5) {
              document.getElementById("bodyHome").style.position = "relative";
              window.scrollTo({ top: 3000, left: 0, behavior: "smooth" });
              this.setState({
                ...this.state,
                bubblePosition: 6
              });
            } else {
              this._changeSVGForm("down");
            }
          }
        } else if (ts < te - 6) {
          if (this.state.bubblePosition !== 1) {
            if (this.state.bubblePosition === 6) {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              document.getElementById("bodyHome").style.position = "fixed";
              document.getElementById("bodyHome").style.overflow = "hidden";
              this.setState({
                ...this.state,
                bubblePosition: 5
              });
            } else {
              this._changeSVGForm("up");
            }
          }
        }
      });
    }
  };

  _scrollEvent = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this._mobileTouchMove();
    } else {
      this._mouseWheelDesktop();
    }
  };

  _down = () => {
    var scrollPos = 0;
    var timerId;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      if (this.state.formPosition < 5) {
        this._changeSVGForm("down");
      } else {
        this.setState(
          { ...this.state, formPosition: 1, bubblePosition: 1 },
          () => this._changeBubble(0)
        );
      }
    }, 1000);
  };

  _downUp = e => {
    if (e.originalEvent.wheelDelta > 0) {
      // document.getElementsByTagName("body")[0].style.overflowY = "hidden";

      // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      if (this.state.bubblePosition === 6) {
        this._changeBubble(4);
      }

      if (this.state.formPosition > 1) {
        if (this.state.bubblePosition !== 6) {
          this._changeSVGForm("up");
        } else {
          this.setState({ ...this.state, bubblePosition: 5 }, () => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setTimeout(() => {
              document.getElementById("bodyHome").style.position = "fixed";
            }, 1000);
          });
        }
      }
    } else {
      if (this.state.formPosition < 5) {
        this._changeSVGForm("down");
      } else {
        this.setState({ ...this.state, bubblePosition: 6 }, () => {
          document.getElementById("bodyHome").style.position = "relative";
          this._changeBubble(5);
          window.scrollTo({ top: 1000, left: 0, behavior: "smooth" });
        });
      }
    }
  };

  _mouseWheelDesktop = () => {
    const wheelEvent =
      "onwheel" in document.createElement("div")
        ? "wheel" // Modern browsers support "wheel"
        : document.onmousewheel !== undefined
        ? "mousewheel" // Webkit and IE support at least "mousewheel"
        : "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

    if (detectmob()) {
      var scrollPos = 0;
      var timerId;
      $(window).bind(
        wheelEvent,
        _.throttle(e => this._down(e), 1000, { leading: true, trailing: false })
      );
    } else {
      $(window).on(
        wheelEvent,
        _.throttle(e => this._downUp(e), 1000, {
          leading: true,
          trailing: false
        })
      );
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
        let newImages1 = [
          `${process.env.ASSET_PREFIX}/static/imgFisioterapia4.jpg`,
          `${process.env.ASSET_PREFIX}/static/imgTratamientos.jpg`,
          `${process.env.ASSET_PREFIX}/static/imgEcografia5.jpg`,
          `${process.env.ASSET_PREFIX}/static/imgPilates3.jpg`,
          `${process.env.ASSET_PREFIX}/static/nosotros.jpg`
        ];
        this.setState({...this.state, images:newImages1})
        break;
      case window.innerWidth <= 414:
        _bubleAnimation(200, 210, 2.3, 3, 3.1, 3.2, -200, -400);
        let newImages2 = [
          `${process.env.ASSET_PREFIX}/static/imgFisioterapia4.jpg`,
          `${process.env.ASSET_PREFIX}/static/imgTratamientos.jpg`,
          `${process.env.ASSET_PREFIX}/static/imgEcografia5.jpg`,
          `${process.env.ASSET_PREFIX}/static/imgPilates3.jpg`,
          `${process.env.ASSET_PREFIX}/static/nosotros.jpg`
        ];
        this.setState({...this.state, images:newImages2})
        break;
      case window.innerWidth <= 768:
        _bubleAnimation(400, 410, 2.3, 3, 3.1, 3.2, -200, -400);
        break;
        case window.innerWidth <= 1024:
          const posX1 = window.innerWidth / 2;
        _bubleAnimation(posX1, posX1 + 10, 3, 3.1, 3.1, 3.2, -200, -400);
          break; 

      default:
        const posX = window.innerWidth / 3;
        _bubleAnimation(posX, posX + 10, 3, 3.1, 3.1, 3.2, -200, -400);
    }
  };

  _blockScroll = () => {
    document.getElementById("bodyHome").style.position = "fixed";
    document.getElementById("bodyHome").style.overflow = "hidden";
  };

  controlLocalStorage = () => {
    const position = localStorage.getItem('formPosition')
    if (position && position < 6 ) {  
      localStorage.removeItem('formPosition')
      return +position 
    } else {
      return 1
    }
  }

  componentDidMount() {
    this._scrollEvent();
    this._manageResize();
    this._blockScroll();
    let position = this.controlLocalStorage()
    if(position !== 1) {
      this._changeBubble(position -1 )
    }
    window.addEventListener("resize", this._manageResize);
    let newImages = [
      `${process.env.ASSET_PREFIX}/static/imgFisioterapia4.jpg`,
      `${process.env.ASSET_PREFIX}/static/imgTratamientos.jpg`,
      `${process.env.ASSET_PREFIX}/static/imgEcografia5.jpg`,
      `${process.env.ASSET_PREFIX}/static/imgPilates3.jpg`,
      `${process.env.ASSET_PREFIX}/static/nosotros.jpg`
    ];
    let newImages2 = window.innerWidth <= 414 ? newImages : images
    this.setState(
      {
        ...this.state,
        formPosition: position,
        bubblePosition: position,
        shape: styler(document.querySelector("#target")),
        vw: window.innerWidth,
        vh: window.innerHeight,
        images: newImages2,
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
    const {formPosition, images} = this.state;
    return (
      
      <HomeWrapperStyle id="bodyHome">
        <Bubbles position={this.state.formPosition} />
        {/* <CrossfadeImage
        src={
          images[this.state.formPosition < 5 && this.state.formPosition - 1]
        }
        duration={1500}
        timingFunction={"ease-out"}
      /> */}
        {images && <img
        className="imageHome"
          src={
            images[this.state.formPosition < 6 && this.state.formPosition - 1]
          }
        /> }

        <svg id="container">
          <clipPath id="svgPath">
            <path id="target" />
          </clipPath>
        </svg>

        <SectionTitle
          duration={500}
          timingFunction={"ease"}
          {...HomeText[
            this.state.formPosition < 6 && this.state.formPosition - 1
          ]}
          formPosition={this.state.formPosition}
        />


        </HomeWrapperStyle> 
    );
   
  }
}
