import MonserratSemiBold from '../static/fonts/Montserrat/Montserrat-SemiBold.ttf';
import MonserratRegular from '../static/fonts/Montserrat/Montserrat-Regular.ttf';

import Navbar from '../components/Navbar/Navbar';
import Head from 'next/head'
import Footer from '../components/Footer/Footer';
export default () => (
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
        max-width: 100vw;
      }
    `}</style>
    <React.Fragment>
    <Navbar />
    <Footer></Footer>
  </React.Fragment>
  </React.Fragment>

)
