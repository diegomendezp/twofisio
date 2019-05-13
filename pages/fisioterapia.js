import React from "react";
import tecnicas from "../content/tecnicas.json";
import Navbar from "../components/NavBar.js";
import Footer from "../components/Footer/Footer.js";
import HeaderAnimated from "../components/HeaderAnimated/HeaderAnimated.js";
import MonserratSemiBold from "../static/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MonserratRegular from "../static/fonts/Montserrat/Montserrat-Regular.ttf";
import Head from "next/head";
import imgFisio from "../static/imgFisioterapia.jpg"
import Technique from "../components/Technique.js";
import FisioterapiaStyles from "../PagesStyles/FisioterapiaStyles.js";
import FontBold from "../PagesStyles/FontStyle/FontBold.js";
import FontRegular from "../PagesStyles/FontStyle/FontRegular.js";
import { tween, styler, easing } from "popmotion";


const displayTechniques = techniques => {
  return techniques.map((technique, i) => <Technique key={i} {...technique} />);
};

class fisioterapia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: "transparent"
    };
  }

  changeNavScroll = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10
        ? this.setState({ ...this.state, navColor: "white" })
        : this.setState({ ...this.state, navColor: "transparent" });
    });
  };

  changeLocalStorage = () => {
    if(this.props && this.props.url.query.formPosition){
      localStorage.setItem("formPosition", this.props.url.query.formPosition)
    } else {
      localStorage.clear();
    }
  }

  componentDidMount() {
    this.changeLocalStorage()
    this.changeNavScroll()
  }

  render() {
    const { navColor } = this.state;
    const { description, techniques } = tecnicas;
    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Twofisio – Fisioterapia</title>
          <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/16Twofiso-favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/32Twofiso-favicon.ico" />
          <link rel="icon" type="image/png" sizes="64x64" href="../static/favicon/64Twofiso-favicon.ico" />
          <link rel="icon" type="image/png" sizes="128x128" href="../static/favicon/128Twofiso-favicon.ico" />
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
        <Navbar link="Nosotros" backgroundColor={navColor}/>
        <FisioterapiaStyles>
        <HeaderAnimated img={imgFisio} positionY={0}/>
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
