import Head from "next/head";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MonserratSemiBold from '../static/fonts/Montserrat/Montserrat-SemiBold.ttf';
import MonserratRegular from '../static/fonts/Montserrat/Montserrat-Regular.ttf';
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
        max-width: 100%;
      }
    `}</style>
    <React.Fragment>
    <Navbar link="Nosotros"/>
    <Footer></Footer>
  </React.Fragment>
  </React.Fragment>

)
