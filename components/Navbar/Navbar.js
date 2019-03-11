import React from 'react'
import NavbarStyles from './NavbarStyles';
import Link from 'next/link'


const Navbar = () => {
  return (
    <React.Fragment>
    <NavbarStyles>
      <img src="/static/logo.png" alt="two-fisio-logo"/>
      <ul>
        <Link href="/nosotros">
          <a>Nosotros</a>
        </Link>
      </ul>
    </NavbarStyles>
    </React.Fragment>
  )
}

export default Navbar
