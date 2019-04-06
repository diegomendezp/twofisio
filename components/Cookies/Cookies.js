import React from "react";
import { CookieWrapper } from "./CookiesStyles";
import FontRegular from "../../PagesStyles/FontStyle/FontRegular";
import FontLink from "../../PagesStyles/FontStyle/FontLink";


class Cookies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "flex" };
  }

  changeDisplay = () => {
    this.setState({... this.state , display:"none"})
  };
  render() {
    const { backgroundColor, color } = this.props;
    return (
      <CookieWrapper
        backgroundColor={backgroundColor}
        color={color}
        display={this.state.display}
      >
        <img src='../static/logo.png' alt="app-logo" className="logo" />
        <div className="cookies-content">
          <FontRegular>
            Este sitio web utiliza cookies para garantizar que obtenga la mejor
            experiencia en nuestro sitio web.{" "}
            <FontLink href="https://cookies.insites.com/" target="_blank">
              Leer más
            </FontLink>
          </FontRegular>
          <button onClick={() => this.changeDisplay()}>ENTENDIDO</button>
        </div>
      </CookieWrapper>
    );
  }
}

export default Cookies;
