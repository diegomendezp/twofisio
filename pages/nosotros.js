import React from "react";
import team from "../content/team.json";
import { Member } from "../components/Member.js";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.js";
import NosotrosStyles from "../PagesStyles/NosotrosStyles.js";
import Head from "next/head";
import MonserratSemiBold from "../static/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MonserratRegular from "../static/fonts/Montserrat/Montserrat-Regular.ttf";

import FontRegular from "../PagesStyles/FontStyle/FontRegular"
const displayTeam = () => {
  return team.map((member, i) => <Member key={i} {...member} />);
};

const nosotros = props => {
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
      <Navbar link="Cerrar"/>
      <NosotrosStyles>
        <FontRegular className="member-description">
          En nuestro centro de fisioterapia siempre será atendido por
          profesionales colegiados con amplia experiencia en el sector y en
          continua formación para ofrecerle el mejor tratamiento posible.
        </FontRegular>

        <div className="team">{displayTeam()}</div>
      </NosotrosStyles>
      <Footer />
    </React.Fragment>
  );
};

export default nosotros;
