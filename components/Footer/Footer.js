import React from "react";
import FooterStyles, { FooterWrapper } from "./FooterStyles";
import contactList from "../../content/contact.json";
import FontBold from "../../PagesStyles/FontStyle/FontBold"
import FontRegular from "../../PagesStyles/FontStyle/FontRegular";

const displayContactElements = contactList => {
  return contactList.map((element, i) => {
    return element.name === "Dirección" ? (
      <a key={i} href="https://goo.gl/maps/K6zbJ39jVTn" target="_blank">
        <div>
          <FontRegular color="white" className="contact-name">{element.name}:</FontRegular>
          <FontRegular color="white" className="contact-value">{element.value}</FontRegular>
        </div>
      </a>
    ) : element.name == "Email"? 
    <a key={i} href={`mailto:${element.value}`}>
        <div>
          <FontRegular color="white" className="contact-name">{element.name}:</FontRegular>
          <FontRegular color="white" className="contact-value">{element.value}</FontRegular>
        </div>
      </a>
    : element.name == "Teléfono" ? 
    <div>
          <FontRegular color="white" className="contact-name">{element.name}:</FontRegular>
          <FontRegular color="white" className="contact-value"><a href={`tel:${element.value}`}>{element.value}</a> | <a href={`tel:${element.value2}`}>{element.value2}</a></FontRegular>
        </div>
    :(
      <div key={i}>
        <FontRegular color="white" className="contact-name">{element.name}:</FontRegular>
        <FontRegular color="white" className="contact-value">{element.value}</FontRegular>
      </div>
    );
  });
};

const Footer = () => {
  return (
    <FooterStyles>
      <FooterWrapper>
        <div className="footer-content">
          <FontBold className="contact" color="white">Contacto</FontBold>
          {displayContactElements(contactList)}
          <div className="copyright">
            <a href="http://tailor-hub.com" target="_blank" ><span>© 2019 by tailor </span></a><img className="footerLogo" src="../../static/iconWhite.svg" alt="logo-tailor"/>
          </div> 
        </div>
      </FooterWrapper>
    </FooterStyles>
  );
};

export default Footer;
