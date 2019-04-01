import React from "react";
import FooterStyles, { FooterWrapper } from "./FooterStyles";
import contactList from "../../content/contact.json";
import FontBold from "../../PagesStyles/FontStyle/FontBold";
import FontRegular from "../../PagesStyles/FontStyle/FontRegular";

const displayContactElements = contactList => {
  return contactList.map((element, i) => {
    return element.name === "Dirección" ? (
      <div key={i}>
        <FontRegular color="white" className="contact-name">
          {element.name}:
        </FontRegular>
        <FontRegular color="white" className="contact-value">
          <a href="https://goo.gl/maps/K6zbJ39jVTn" target="_blank">
            {element.value}
          </a>
        </FontRegular>
      </div>
    ) : element.name == "Email" ? (
      <div key={i}>
        <FontRegular color="white" className="contact-name">
          {element.name}:
        </FontRegular>
        <FontRegular color="white" className="contact-value">
          <a href={`mailto:${element.value}`}>{element.value}</a>
        </FontRegular>
      </div>
    ) : element.name == "Teléfono" ? (
      <div key={i}>
        <FontRegular color="white" className="contact-name">
          {element.name}:
        </FontRegular>
        <FontRegular color="white" className="contact-value">
          <a href={`tel:${element.value}`}>{element.value}</a> |{" "}
          <a href={`tel:${element.value2}`}>{element.value2}</a>
        </FontRegular>
      </div>
    ) : (
      <div key={i}>
        <FontRegular color="white" className="contact-name">
          {element.name}:
        </FontRegular>
        <FontRegular color="white" className="contact-value">
          {element.value}
        </FontRegular>
      </div>
    );
  });
};

const Footer = () => {
  return (
    <FooterStyles>
      <FooterWrapper>
        <div className="footer-content">
          <FontBold className="contact" color="white">
            Contacto
          </FontBold>
          {displayContactElements(contactList)}
          <div className="copyright">
            <a href="http://tailor-hub.com" target="_blank">
              <span>© 2019 by tailor </span>
            </a>
            <img
              className="footerLogo"
              src="../../static/iconWhite.svg"
              alt="logo-tailor"
            />
          </div>
        </div>
      </FooterWrapper>
    </FooterStyles>
  );
};

export default Footer;
