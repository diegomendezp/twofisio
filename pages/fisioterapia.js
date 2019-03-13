import React from "react";
import tecnicas from "../content/tecnicas.json";
import Navbar from "../components/Navbar/Navbar.js";
import Footer from "../components/Footer/Footer.js";
import MonserratSemiBold from "../static/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MonserratRegular from "../static/fonts/Montserrat/Montserrat-Regular.ttf";
import Head from "next/head";
import Technique from "../components/Technique.js";
import FisioterapiaStyles from "../PagesStyles/FisioterapiaStyles.js";


const displayTechniques = techniques => {
  return techniques.map((technique, i) => <Technique key={i} {...technique} />);
};
const fisioterapia = () => {
  const {description, techniques} = tecnicas;
  return (<React.Fragment>
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
  <Navbar link="Nosotros"/>
    <FisioterapiaStyles>
      <img className="techniques-img" src="../static/imgFisioterapia.jpg" alt="fisioterapia-img"/>
      <div className="techniques-content">
        <h2>Fisioterapia</h2>
        <p>{description}</p>
        <div className="techniques">
          {displayTechniques(techniques)}
        </div>
      </div>
      </FisioterapiaStyles>
    <Footer />
  </React.Fragment>
  )

};
export default fisioterapia;
