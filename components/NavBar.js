import React from 'react'
import posed from 'react-pose';
import { NavWrapperStyle } from '../PagesStyles/NavBarStyle'
import NavTextStyle from '../PagesStyles/NavTextStyle'
import logo from '../static/logo.png'
import tailorLogo from '../static/iconWhite.svg'
import Link from 'next/link';
import FontRegular from '../PagesStyles/FontStyle/FontRegular';
import contactList from '../content/contact.json'

const Box = posed.div({
    up: {
        y: ({ y }) => (y),
        transition: {
            duration: 400,
            ease: 'linear'
        }
    },
    down: {
        y: ({ y2 }) => (y2),
        transition: {
            duration: 400,
            ease: 'linear'
        }
    }
})


class NavBar extends React.Component {

    constructor() {
        super()
        this.state = {
            hamburger: undefined,
            position: true,
            pos: true,
            menuSizes: {y: -1000, y2: 0},
            visible: false,
            logoVisible: true,
        }
    }

    _manageResize = () => {
        
        switch (true) {
        case window.innerWidth < 376:
            return { y: -window.innerHeight * 1.20, y2: 0 }
        case window.innerWidth < 415:
            return { y: -window.innerHeight * 1.20, y2: 0 }
        case window.innerWidth < 769:
            return { y: -window.innerHeight * 1.20, y2: 0 }
        default:
            return {y: -window.innerHeight * 1.20, y2: 0}
        }
    };

    componentDidMount() {
        this.setState({ 
            visible: true,
            hamburger: document.getElementsByClassName("hamburger")[0], 
            navLogo: document.getElementsByClassName("navLogo")[0],
            menuSizes: this._manageResize() 
        })
    }

    hamburgerEffect = () => {

        let el = this.state.hamburger
        let log = this.state.navLogo

        if (el.classList) {
            el.classList.toggle('is-active');
        } else {
            var classes = el.className.split(' ');
            var existingIndex = classes.indexOf('is-active');

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
            else
                classes.push('is-active');

            el.className = classes.join(' ');
        }

        if (!this.state.logoVisible) {            
            setTimeout(()=> {
                this.setState({logoVisible: !this.state.logoVisible})
            },400)
        } else {
            this.setState({logoVisible: !this.state.logoVisible})
        }
        
    }
    
    
    displayContactElements = contactList => {
        return contactList.map((element, i) => {
          return element.name === "Dirección" ? (
            <div className="navInfoContainer" key={i}>
              <FontRegular className="contact-name">
                {element.name}:
              </FontRegular>
              <FontRegular className="contact-value">
                <a href="https://goo.gl/maps/K6zbJ39jVTn" target="_blank">
                  {element.value}
                </a>
              </FontRegular>
            </div>
          ) : element.name == "Email" ? (
            <div className="navInfoContainer" key={i}>
              <FontRegular className="contact-name">
                {element.name}:
              </FontRegular>
              <FontRegular className="contact-value">
                <a href={`mailto:${element.value}`}>{element.value}</a>
              </FontRegular>
            </div>
          ) : element.name == "Teléfono" ? (
            <div className="navInfoContainer" key={i}>
              <FontRegular className="contact-name">
                {element.name}:
              </FontRegular>
              <FontRegular className="contact-value">
                <a href={`tel:${element.value}`}>{element.value}</a> |{" "}
                <a href={`tel:${element.value2}`}>{element.value2}</a>
              </FontRegular>
            </div>
          ) : (
            <div className="navInfoContainer" key={i}>
              <FontRegular className="contact-name">
                {element.name}:
              </FontRegular>
              <FontRegular className="contact-value">
                {element.value}
              </FontRegular>
            </div>
          );
        });
      };

    _managePositionNav = () => {
        if (this.state.pos) {
            this.setState({ position: !this.state.position, pos: !this.state.pos }, () => this.hamburgerEffect()) 
        } else {
            this.setState({ position: !this.state.position }, () => {
            this.hamburgerEffect()
            setTimeout(()=> {
                this.setState({pos: !this.state.pos})
            },400)
            })
        }
     
    }


    render() {

        const { backgroundColor } = this.props;

        return (
            <NavWrapperStyle position={this.state.pos} visible={this.state.visible} lvisible={this.state.logoVisible} backgroundColor={backgroundColor}>
                <div className="menuIcon">
                <Link href="/">
                    <img className="navLogo" src={logo}/>
                </Link>
                    <link href="/static/css/hamburger.css" rel="stylesheet" />
                    <button className="hamburger hamburger--spin" type="button" onClick={() => this._managePositionNav()}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <Box pose={this.state.position ? "up" : "down"} className="menu" y={this.state.menuSizes !== undefined && this.state.menuSizes.y} y2={this.state.menuSizes !== undefined && this.state.menuSizes.y2}>
                    <div className="logoSection">
                        <Link href="/">
                            <img className="logo" src={logo} />
                        </Link></div>
                    <div className="menuSection">
                    <div className="subMenuSection">

                       {this.displayContactElements(contactList)}
                   </div>
                    <div className="subMenuSection2">
                        <Link href="/nosotros">
                            <NavTextStyle  margin={true}>Nosotros</NavTextStyle>
                        </Link>
                        <Link href="/fisioterapia">                        
                            <NavTextStyle  margin={true}>Fisioterapia</NavTextStyle>
                        </Link>
                        <Link href="/tratamientos">
                            <NavTextStyle  margin={true}>Tratamientos</NavTextStyle>
                        </Link>
                        <Link href="/ecografia">                        
                            <NavTextStyle  margin={true}>Ecografías</NavTextStyle>
                        </Link>
                        <Link href="/pilates">
                            <NavTextStyle  margin={true}>Pilates</NavTextStyle>
                        </Link>
                    </div>
                    </div>
                    <div className="menuFooter">
                        <NavTextStyle>© 2019 by Tailor</NavTextStyle>
                        <img src={tailorLogo}></img>
                    </div>
                </Box>
            </NavWrapperStyle>
        )
    }
}

export default NavBar