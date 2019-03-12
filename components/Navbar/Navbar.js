import React from "react";
import { NavbarStyles, NavbarWrapper } from "./NavbarStyles";
import Link from "next/link";
import Router from "next/router";

const displayLink = () => {
  return Router.pathname.includes("nosotros") ? (
    <Link href="/">
      <a>Cerrar</a>
    </Link>
  ) : (
    <Link href="/nosotros">
      <a>Nosotros</a>
    </Link>
  );
};

const Navbar = ({link}) => {
  return (
    <NavbarStyles>
      <NavbarWrapper>
        <img src="/static/logo.png" alt="two-fisio-logo" />
        <ul><Link href={link === "Cerrar" ? "/" : "/nosotros"}>
      <a>{link}</a>
    </Link></ul>
      </NavbarWrapper>
    </NavbarStyles>
  );
};

export default Navbar;
