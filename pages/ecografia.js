import React from "react";
import MonserratSemiBold from "../static/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MonserratRegular from "../static/fonts/Montserrat/Montserrat-Regular.ttf";
import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import EcographyStyles from "../PagesStyles/EcografiaStyles";
import imgEco from "../static/imgEcografia.jpg";
import HeaderAnimated from "../components/HeaderAnimated/HeaderAnimated";

import FontRegular from "../PagesStyles/FontStyle/FontRegular.js";
import FontBold from "../PagesStyles/FontStyle/FontBold.js";

class ecografia extends React.Component {
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
          <title>Twofisio – Ecografías</title>
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
        <Navbar link="Nosotros" backgroundColor={navColor} />
        <EcographyStyles>
          <HeaderAnimated img={imgEco} positionY={40} />
          <div className="back-photo">
            <div className="ecography-content">
              <FontBold>Ecografía y fisioterapía invasiva</FontBold>
              <div className="ecography">
                <FontRegular>
                  En Twofisio disponemos de ecógrafo para realizar una mejor
                  evaluación y seguimiento fisioterápico.
                </FontRegular>
                <FontRegular>
                  La ecografía es una herramienta que permite un estudio
                  dinámico, rápido, eficaz, inocuo, en tiempo real y comparativo
                  que se puede realizar en este caso como una extensión de la
                  evaluación y diagnóstico de fisioterapia para evaluar de forma
                  objetiva el tejido neuromusculoesquelético, programar mejor el
                  tratamiento de fisioterapia, valorar la evolución de la lesión
                  y para validar las diferentes técnicas terapéuticas de
                  fisioterapia.
                </FontRegular>
                <FontRegular>
                  Gracias a ello, además, podemos realizar técnicas de
                  FISIOTERAPIA INVASIVA con una gran precisión:
                </FontRegular>
                <FontRegular className="treatment-eco">
                  <span className="treatment-name">– Punción seca:</span> es una
                  técnica de Fisioterapia que consiste en el empleo de una aguja
                  sobre los puntos gatillo o nódulos musculares (nudos de
                  contracción muscular), con el objetivo de tratar el síndrome
                  del dolor miofascial.
                </FontRegular>
                <FontRegular className="treatment-eco">
                  <span className="treatment-name">
                    – Electrolisis percutánea intratisular (EPI):
                  </span>{" "}
                  técnica de fisioterapia invasiva que consiste en la aplicación
                  ecoguiada de una corriente galvánica a través de una aguja de
                  acupuntura que produce un proceso inflamatorio de carácter
                  local permitiendo la fagocitosis y la reparación del tejido
                  blando afectado (tendón, ligamento, músculo, etc.).
                </FontRegular>
              </div>
            </div>
          </div>
        </EcographyStyles>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ecografia;
