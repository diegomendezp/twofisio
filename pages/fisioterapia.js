import React from "react";
import tecnicas from "../content/tecnicas.json";
import Navbar from "../components/NavBar.js";
import Footer from "../components/Footer/Footer.js";
import HeaderAnimated from "../components/HeaderAnimated/HeaderAnimated.js";
import Head from "next/head";
import imgFisio from "../static/imgFisioterapia.jpg"
import Technique from "../components/Technique.js";
import FisioterapiaStyles from "../PagesStyles/FisioterapiaStyles.js";
import FontBold from "../PagesStyles/FontStyle/FontBold.js";
import FontRegular from "../PagesStyles/FontStyle/FontRegular.js";
import { tween, styler, easing } from "popmotion";
import Meta from "../components/Meta.js";


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
      localStorage.removeItem('formPosition')
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
        <Meta title="Twofisio – Fisioterapia" />
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
