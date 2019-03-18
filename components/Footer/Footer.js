import React from "react";
import FooterStyles, { FooterWrapper } from "./FooterStyles";
import contactList from "../../content/contact.json";

const displayContactElements = contactList => {
  return contactList.map((element, i) => {
    return element.name === "Dirección" ? (
      <a key={i} href="https://goo.gl/maps/K6zbJ39jVTn" target="_blank">
        <div>
          <p>{element.name}:</p>
          <p>{element.value}</p>
        </div>
      </a>
    ) : (
      <div key={i}>
        <p>{element.name}:</p>
        <p>{element.value}</p>
      </div>
    );
  });
};

const Footer = () => {
  return (
    <FooterStyles>
      <FooterWrapper>
        <div className="footer-content">
          <h3 className="contact">Contacto</h3>
          {displayContactElements(contactList)}
          <div className="copyright">
            <span>© 2019 by tailor </span><img className="footerLogo" src="../../static/iconWhite.svg" alt="logo-tailor"/>
          </div> 
        </div>
      </FooterWrapper>
    </FooterStyles>
  );
};

export default Footer;
