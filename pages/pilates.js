import React from "react";
import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import PilatesStyles from "../PagesStyles/PilatesStyles.js";
import HeaderAnimated from "../components/HeaderAnimated/HeaderAnimated.js";
import FontRegular from "../PagesStyles/FontStyle/FontRegular.js";
import FontBold from "../PagesStyles/FontStyle/FontBold.js";
import Meta from "../components/Meta";
class pilates extends React.Component {
  constructor() {
    super();
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
        <Meta title="Twofisio – Pilates" />
        <Navbar link="Nosotros" backgroundColor={navColor}/>
        <PilatesStyles>
          <HeaderAnimated img={`${process.env.ASSET_PREFIX}/static/imgPilates5.jpg`} positionY={13} />
          <div className="pilates-content">
            <FontBold>Pilates</FontBold>
            <div className="pilates">
              <FontRegular>
                El método pilates es una técnica utilizada para el entrenamiento
                físico y mental del cuerpo mediante una serie de ejercicios que
                se realizan de forma fluida manteniendo un control exhaustivo de
                la respiración.
              </FontRegular>
              <FontRegular>
                Lo pueden realizar, tanto aquellos que se introducen por primera
                en la actividad física, como los que ya hacen algún tipo de
                ejercicio, ya sean jóvenes o mayores. También es muy
                recomendable para las personas que se encuentran en un proceso
                de recuperación de una lesión, embarazadas, deportistas de alto
                rendimiento…
              </FontRegular>
              <FontRegular>
                Las clases de pilates se imparten en grupos reducidos, (máximo 3
                personas por grupo), o individualmente y siempre serán
                impartidas por fisioterapeutas colegiados.
              </FontRegular>
            </div>
          </div>
        </PilatesStyles>
        <Footer />
      </React.Fragment>
    );
  }
}

export default pilates;
