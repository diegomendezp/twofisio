import React from "react";
import tecnicas from "../content/tecnicas.json";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import HeaderAnimated from "../components/HeaderAnimated/HeaderAnimated.js";
import MonserratSemiBold from "../static/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MonserratRegular from "../static/fonts/Montserrat/Montserrat-Regular.ttf";
import Head from "next/head";
import Technique from "../components/Technique.js";
import FisioterapiaStyles from "../PagesStyles/FisioterapiaStyles.js";
import FontBold from "../PagesStyles/FontStyle/FontBold.js";
import FontRegular from "../PagesStyles/FontStyle/FontRegular.js";
import { tween, styler, easing } from "popmotion";


const displayTechniques = techniques => {
  return techniques.map((technique, i) => <Technique key={i} {...technique} />);
};

class fisioterapia extends React.Component {
  
  componentDidMount() {
    tween({
      from: { scaleY: 2, scaleX: 6 },
      to: { scaleY: 2.18, scaleX: 7 },
      duration: 1800,
      ease: easing.easeInOut,
      flip: Infinity
    }).start(v => {
      if (document.getElementById("target") !== null) {
        document.getElementById(
          "target"
        ).style.transform = `translate(1000px, -300px) scaleY(${v.scaleY}) scaleX(${v.scaleX})`;
      }
    })
  }

  render() {
    const { description, techniques } = tecnicas;
    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
          @font-face {
            font-family: "Monserrat-Semibold";
            src: url(${MonserratSemiBold}) format("truetype");
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: "Monserrat-Regular";
            src: url(${MonserratRegular}) format("truetype");
            font-weight: normal;
            font-style: normal;
          }
  
          body {
            margin: 0;
            padding: 0;
            max-width: 100%;
          }
        `}</style>
        <Navbar link="Nosotros" />
        <FisioterapiaStyles>
        <HeaderAnimated/>
          <div className="techniques-content">
            <FontBold>Fisioterapia</FontBold>
            <FontRegular>{description}</FontRegular>
            <div className="techniques">{displayTechniques(techniques)}</div>
          </div>
        </FisioterapiaStyles>
        <Footer />
      </React.Fragment>
    );
  }


  
};
export default fisioterapia;
