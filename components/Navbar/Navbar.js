import React from "react";
import { NavbarStyles, NavbarWrapper } from "./NavbarStyles";
import Link from "next/link";
import {withRouter} from 'next/router'


const Navbar = ({ link }) => {
  let url;
  if (link === "Cerrar") {
    url = "/";
  } else if (link === "Nosotros") {
    url = "/nosotros";
  }
  return (
    <NavbarStyles>
      <NavbarWrapper>
        <img src="/static/logo.png" alt="two-fisio-logo" />
        <ul>
          <Link href={url}>
            <a>{link}</a>
          </Link>
        </ul>
      </NavbarWrapper>
    </NavbarStyles>
  );
};

export default Navbar;
