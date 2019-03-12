import React from "react";
import { NavbarStyles, NavbarWrapper } from "./NavbarStyles";
import Link from "next/link";



const Navbar = ({link}) => {
  const url = link === "Cerrar" ? "/" : "/nosotros"
  return (
    <NavbarStyles>
      <NavbarWrapper>
        <img src="/static/logo.png" alt="two-fisio-logo" />
        <ul><Link href={url}>
      <a>{link}</a>
    </Link></ul>
      </NavbarWrapper>
    </NavbarStyles>
  );
};

export default Navbar;
