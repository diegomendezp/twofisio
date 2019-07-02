import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import homeContent from "../content/home.json";
import Link from "next/link";
import Cookies from '../components/Cookies/Cookies'
import FontBold from "../PagesStyles/FontStyle/FontBold";
import Home from "../components/Home/Home";
import Meta from "../components/Meta";

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
   <Meta title="Twofisio"/>
    <React.Fragment>
      <Navbar/>
      <Home></Home>
      <div className="center">
        <Cookies backgroundColor="white" color="#0f1c51"/>
      </div>
      <Footer />
    </React.Fragment>
  </React.Fragment>
);
