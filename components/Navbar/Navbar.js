import React from "react";
import { NavbarStyles, NavbarWrapper } from "./NavbarStyles";
import Link from "next/link";



export default class Navbar extends React.Component {

  constructor(props) {
    super()
    this.props = props
    this.state = {
      url: ""
    }
  }

  componentDidMount() {
  if (this.props.link === "Cerrar") {
    this.setState({...this.state, url: "/"});
  } else if (this.props.link === "Nosotros") {
    this.setState({...this.state, url: "/nosotros"});
  }
  }

  manageScroll = () => {
    if (this.props.lilnk === "Cerrar" ) {
      document.getElementsByTagName("body")[0].style.position = "fixed";
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.position = "relative";
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
    }
  }

  // let url;


  render() {
    const { backgroundColor } = this.props;
    return (
      <NavbarStyles backgroundColor={backgroundColor}>
        <NavbarWrapper>
        <Link href="/">
          <img src="/static/logo.png" alt="two-fisio-logo" />
          </Link>
          <ul>
            <Link href={this.state.url} >
              <a onClick={() => this.manageScroll()}>{this.props.link}</a>
              </Link>
          </ul>
        </NavbarWrapper>
      </NavbarStyles>
    );
  }
};

