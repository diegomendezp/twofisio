import React from 'react'
import {NavbarStyles, NavbarWrapper} from './NavbarStyles';
import Link from 'next/link'



const Navbar = () => {
  return (
    <NavbarStyles>
    <NavbarWrapper>
      <img src="/static/logo.png" alt="two-fisio-logo"/>
      <ul>
        <Link href="/nosotros">
          <a>Nosotros</a>
        </Link>
      </ul>
    </NavbarWrapper>
    </NavbarStyles>
  )
}

export default Navbar
