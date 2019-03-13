import React from "react";
import MonserratSemiBold from "../static/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MonserratRegular from "../static/fonts/Montserrat/Montserrat-Regular.ttf";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PilatesStyles from "../PagesStyles/PilatesStyles.js";
const pilates = () => {
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
      <PilatesStyles>
        <img
          className="pilates-img"
          src="../static/imgPilates.jpg"
          alt="pilates-img"
        />
        <div className="pilates-content">
          <h2>Pilates</h2>
          <div className="pilates">
            <p>
              El método pilates es una técnica utilizada para el entrenamiento
              físico y mental del cuerpo mediante una serie de ejercicios que se
              realizan de forma fluida manteniendo un control exhaustivo de la
              respiración.
            </p>
            <p>
              Lo pueden realizar, tanto aquellos que se introducen por primera
              en la actividad física, como los que ya hacen algún tipo de
              ejercicio, ya sean jóvenes o mayores. También es muy recomendable
              para las personas que se encuentran en un proceso de recuperación
              de una lesión, embarazadas, deportistas de alto rendimiento…
            </p>
            <p>
              Las clases de pilates se imparten en grupos reducidos, (máximo 3
              personas por grupo), o individualmente y siempre serán impartidas
              por fisioterapeutas colegiados.
            </p>
          </div>
        </div>
      </PilatesStyles>
      <Footer />
    </React.Fragment>
  );
};

export default pilates;
