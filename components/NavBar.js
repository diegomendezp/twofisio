import React from "react";
import posed from "react-pose";
import { NavWrapperStyle } from "../PagesStyles/NavBarStyle";
import { NavTextStyle } from "../PagesStyles/NavTextStyle";
import Link from "next/link";
import FontBold from "../PagesStyles/FontStyle/FontBold";

const Box = posed.div({
  up: {
    y: ({ y }) => y,
    transition: {
      duration: 400,
      ease: "linear"
    }
  },
  down: {
    y: ({ y2 }) => y2,
    transition: {
      duration: 400,
      ease: "linear"
    }
  }
});

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      hamburger: undefined,
      position: true,
      pos: true,
      menuSizes: { y: -1000, y2: 0 },
      visible: false,
      logoVisible: true
    };
  }

  _manageResize = () => {
    switch (true) {
      case window.innerWidth < 376:
        return { y: -window.innerHeight * 1.2, y2: 0 };
      case window.innerWidth < 415:
        return { y: -window.innerHeight * 1.2, y2: 0 };
      case window.innerWidth < 769:
        return { y: -window.innerHeight * 1.2, y2: 0 };
      default:
        return { y: -window.innerHeight * 1.2, y2: 0 };
    }
  };

  componentDidMount() {
    this.setState({
      visible: true,
      hamburger: document.getElementsByClassName("hamburger")[0],
      navLogo: document.getElementsByClassName("navLogo")[0],
      menuSizes: this._manageResize()
    });
  }

  hamburgerEffect = () => {
    let el = this.state.hamburger;
    let log = this.state.navLogo;

    if (el.classList) {
      el.classList.toggle("is-active");
    } else {
      var classes = el.className.split(" ");
      var existingIndex = classes.indexOf("is-active");

      if (existingIndex >= 0) classes.splice(existingIndex, 1);
      else classes.push("is-active");

      el.className = classes.join(" ");
    }

    if (!this.state.logoVisible) {
      setTimeout(() => {
        this.setState({ logoVisible: !this.state.logoVisible });
      }, 400);
    } else {
      this.setState({ logoVisible: !this.state.logoVisible });
    }
  };

  _managePositionNav = () => {
    if (this.state.pos) {
      this.setState(
        { position: !this.state.position, pos: !this.state.pos },
        () => this.hamburgerEffect()
      );
    } else {
      this.setState({ position: !this.state.position }, () => {
        this.hamburgerEffect();
        setTimeout(() => {
          this.setState({ pos: !this.state.pos });
        }, 400);
      });
    }
  };

  render() {
    const { backgroundColor } = this.props;

    return (
      <NavWrapperStyle
        position={this.state.pos}
        visible={this.state.visible}
        lvisible={this.state.logoVisible}
        backgroundColor={backgroundColor}
      >
        <div className="menuIcon">
          <Link href="/">
            <img
              className="navLogo"
              src={`${process.env.ASSET_PREFIX}/static/logo.png`}
            />
          </Link>
          <link href={`${process.env.ASSET_PREFIX}/static/css/hamburger.css`} rel="stylesheet" />
          <button
            className="hamburger hamburger--spin"
            type="button"
            onClick={() => this._managePositionNav()}
          >
            <span className="hamburger-box">
              <FontBold menu>{this.state.logoVisible ? "Menu" : "Cerrar"}</FontBold>
            </span>
          </button>
        </div>
        <Box
          pose={this.state.position ? "up" : "down"}
          className="menu"
          y={this.state.menuSizes !== undefined && this.state.menuSizes.y}
          y2={this.state.menuSizes !== undefined && this.state.menuSizes.y2}
        >
          <div className="logoSection">
            <Link href="/">
              <img
                className="logo"
                src={`${process.env.ASSET_PREFIX}/static/logo.png`}
              />
            </Link>
          </div>
          <div className="menuSection">
            <div className="subMenuSection">
              <div className="navInfoContainer">
                <p className="navInfo">Teléfono:</p>
                <p className="navInfo">
                  <a href={`tel:${"917116205"}`}>917 116 205</a> |{" "}
                  <a href={`tel:${"609 058 398"}`}>609 058 398</a>
                </p>
              </div>

              <div className="navInfoContainer">
                <p className="navInfo">
                  Email:{" "}
                  <a href={`mailto:centrodefisioterapia@twofisio.es`}>
                    centrodefisioterapia@twofisio.es
                  </a>
                </p>
              </div>

              <div className="navInfoContainer">
                <p className="navInfo">Dirección:</p>
                <p className="navInfo">
                  <a href="https://goo.gl/maps/K6zbJ39jVTn" target="_blank">
                    Avenida del Padre Piquer, 39
                  </a>
                </p>
                <p className="navInfo">28024 Madrid</p>
              </div>
            </div>
            <div className="subMenuSection2">
              <Link href="/fisioterapia">
                <NavTextStyle title={true} margin={true}>
                  Fisioterapia
                </NavTextStyle>
              </Link>
              <Link href="/tratamientos">
                <NavTextStyle title={true} margin={true}>
                  Tratamientos
                </NavTextStyle>
              </Link>
              <Link href="/ecografia">
                <NavTextStyle title={true} margin={true}>
                  Ecografías
                </NavTextStyle>
              </Link>
              <Link href="/pilates">
                <NavTextStyle title={true} margin={true}>
                  Pilates
                </NavTextStyle>
              </Link>
              <Link href="/nosotros">
                <NavTextStyle title={true} margin={true}>
                  Nosotros
                </NavTextStyle>
              </Link>
            </div>
          </div>
        </Box>
      </NavWrapperStyle>
    );
  }
}

export default NavBar;
