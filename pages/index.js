import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import MonserratSemiBold from "../static/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MonserratRegular from "../static/fonts/Montserrat/Montserrat-Regular.ttf";
import homeContent from "../content/home.json";
import Link from "next/link";
import Cookies from '../components/Cookies/Cookies'
import FontBold from "../PagesStyles/FontStyle/FontBold";
import Home from "../components/Home/Home";

const displayHomeContent = () => {
  return homeContent.map((homeItem, i) => (
    <div key={i}>
      <FontBold>{homeItem.name}</FontBold>
      <p>{homeItem.description}</p>
      <Link href={homeItem.link}>
        <a>+ Más info</a>
      </Link>
    </div>
  ));
};

export default () => (
  <React.Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Twofisio</title>
      <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/16Twofiso-favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/32Twofiso-favicon.ico" />
      <link rel="icon" type="image/png" sizes="64x64" href="../static/favicon/64Twofiso-favicon.ico" />
      <link rel="icon" type="image/png" sizes="128x128" href="../static/favicon/128Twofiso-favicon.ico" />
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
        position: relative;
      
      }

      .center {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
      }
    `}</style>
    <React.Fragment>
      <Navbar/>
      <Home></Home>
      {/* <HomeStyles>{displayHomeContent()}</HomeStyles> */}
      <div className="center">
        <Cookies backgroundColor="white" color="#0f1c51"/>
      </div>
      <Footer />
    </React.Fragment>
  </React.Fragment>
);
