import React from 'react'
import treatments from '../content/treatments.json'
import Treatment from '../components/Member/Treatment.js';
import TratamientosStyles from '../PagesStyles/TratamientosStyles.js';
import MonserratSemiBold from '../static/fonts/Montserrat/Montserrat-SemiBold.ttf';
import MonserratRegular from '../static/fonts/Montserrat/Montserrat-Regular.ttf';
import Head from "next/head";
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';

const displayTreatments = () => {
  return treatments.map((treatment, i) => <Treatment key={i} {...treatment}/>)
}

const tratamientos = (props) => {
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
    <Navbar link="Nosotros"/>
      <TratamientosStyles>
        <img className="treatments-img" src="../static/imgTratamientos.jpg" alt="tratamientos-img"/>
        <div className="treatments-content">
          <h2>Tratamientos</h2>
          {displayTreatments()}
        </div>
      </TratamientosStyles>
      <Footer />
    </React.Fragment>
  )
}



export default tratamientos

