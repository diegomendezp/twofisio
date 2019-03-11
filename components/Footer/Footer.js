import React from "react";
import FooterStyles from "./FooterStyles";
import contactList from "../../content/contact.json";

const displayContactElements = contactList => {
  return contactList.map((element, i) => {
    return element.name === "Dirección" ? (
      <a key={i} href="https://goo.gl/maps/K6zbJ39jVTn" target="_blank">
        <li>
          <p>{element.name}</p>
          <p>{element.value}</p>
        </li>
      </a>
    ) : (
      <li key={i}>
        <p>{element.name}</p>
        <p>{element.value}</p>
      </li>
    );
  });
};

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-content">
        <h3 className="contact">Contacto</h3>
        {displayContactElements(contactList)}
      </div>
    </FooterStyles>
  );
};

export default Footer;
