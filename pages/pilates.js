import React from "react";
import MonserratSemiBold from "../static/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MonserratRegular from "../static/fonts/Montserrat/Montserrat-Regular.ttf";
import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import PilatesStyles from "../PagesStyles/PilatesStyles.js";
import HeaderAnimated from "../components/HeaderAnimated/HeaderAnimated.js";
import imgPilates from "../static/imgPilates.jpg";
import FontRegular from "../PagesStyles/FontStyle/FontRegular.js";
import FontBold from "../PagesStyles/FontStyle/FontBold.js";
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

  componentDidMount() {
    this.changeNavScroll()
  }
  

  render() {
    const { navColor } = this.state;
    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Twofisio – Pilates</title>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../static/favicon/16Twofiso-favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../static/favicon/32Twofiso-favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="64x64"
            href="../static/favicon/64Twofiso-favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="../static/favicon/128Twofiso-favicon.ico"
          />
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
        <PilatesStyles>
          <HeaderAnimated img={imgPilates} positionY={13} />
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
