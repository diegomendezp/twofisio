import React from "react";
import team from "../content/team.json";
import { Member } from "../components/Member.js";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer/Footer.js";
import NosotrosStyles from "../PagesStyles/NosotrosStyles.js";
import Head from "next/head";


import FontRegular from "../PagesStyles/FontStyle/FontRegular";
import Meta from "../components/Meta.js";
const displayTeam = () => {
  return team.map((member, i) => <Member key={i} {...member} />);
};

export default class Nosotros extends React.Component {
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
  changeLocalStorage = () => {
    if(this.props && this.props.url.query.formPosition){
      localStorage.setItem("formPosition", this.props.url.query.formPosition)
    } else {
      localStorage.removeItem('formPosition')
    }
  }

  componentDidMount() {
    this.changeLocalStorage()
    document.getElementsByTagName("body")[0].style.position = "relative";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
    this.changeNavScroll();
  }

  render() {
    const { navColor } = this.state;
    return (
      <React.Fragment>
        <Meta title="Twofisio – Nosotros"/>
        <Navbar link="Cerrar" backgroundColor={navColor} />
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
  }
}
