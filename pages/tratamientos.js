import React from "react";
import treatments from "../content/treatments.json";
import Treatment from "../components/Treatment.js";
import TratamientosStyles from "../PagesStyles/TratamientosStyles.js";

import FontBold from "../PagesStyles/FontStyle/FontBold.js";

import Head from "next/head";
import Navbar from "../components/NavBar.js";
import Footer from "../components/Footer/Footer.js";
import imgTrata from "../static/imgTratamientos.jpg";
import HeaderAnimated from "../components/HeaderAnimated/HeaderAnimated";
import Meta from "../components/Meta.js";
const displayTreatments = () => {
  return treatments.map((treatment, i) => <Treatment key={i} {...treatment} />);
};

class tratamientos extends React.Component {
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
    return (
      <React.Fragment>
        <Meta title="Twofisio – Tratamientos" />
        <Navbar link="Nosotros" backgroundColor={navColor} />
        <TratamientosStyles>
          <HeaderAnimated img={imgTrata} positionY={13} />
          <div className="treatments-content">
            <FontBold>Tratamientos</FontBold>
            <div className="treatments">{displayTreatments()}</div>
          </div>
        </TratamientosStyles>
        <Footer />
      </React.Fragment>
    );
  }
}

export default tratamientos;
