import React from 'react'
import treatments from '../content/treatments.json'
import Treatment from '../components/Treatment.js';
import TratamientosStyles from '../PagesStyles/TratamientosStyles.js';

import FontBold from "../PagesStyles/FontStyle/FontBold.js";

import MonserratSemiBold from '../static/fonts/Montserrat/Montserrat-SemiBold.ttf';
import MonserratRegular from '../static/fonts/Montserrat/Montserrat-Regular.ttf';

import Head from "next/head";
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';
import imgTrata from "../static/imgTratamientos.jpg"
import HeaderAnimated from "../components/HeaderAnimated/HeaderAnimated"
const displayTreatments = () => {
  return treatments.map((treatment, i) => <Treatment key={i} {...treatment}/>)
}

const tratamientos = (props) => {
  return (
    <React.Fragment>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/16Twofiso-favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/32Twofiso-favicon.ico" />
      <link rel="icon" type="image/png" sizes="64x64" href="../static/favicon/64Twofiso-favicon.ico" />
      <link rel="icon" type="image/png" sizes="128x128" href="../static/favicon/128Twofiso-favicon.ico" />
      <title>Twofisio – Tratamientos</title>
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
      <TratamientosStyles>
      <HeaderAnimated img={imgTrata} positionY={13}/>
        <div className="treatments-content">
          <FontBold>Tratamientos</FontBold>
          <div className="treatments">
            {displayTreatments()}
          </div>
        </div>
      </TratamientosStyles>
      <Footer />
    </React.Fragment>
  )
}



export default tratamientos

