import styled from 'styled-components';

const NavWrapperStyle = styled.div`

width: 100vw;
height: ${props => props.lvisible ? "20vh" : "100vh"};
padding: 0;
display: ${props => props.visible ? "flex" : "none"};
justify-content: space-between;
align-items: center;
position: fixed;
z-index: ${props => props.position ? 0 : 10};
overflow-x: hidden;
animation-delay: 0.4s;
z-index: 10;

.navLogo {
  height: 7vh;
  object-fit: cover;
  z-index: ${props => props.lvisible ? "1" : "-1"}
}

.navInfoContainer {
  margin-bottom: 2%;
  p {
    font-size: 1.6vw;
  }
}

.navInfo {
  font-family: "Monserrat-Regular";
  margin: 2% 0;
}

.logoSection {
  height: 15vh;
  padding: 2% 5%;
}

.logo {
  margin-bottom: 15%;
  height: 15vh;
  object-fit: cover;
}

.menu {
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.menuSection {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
}

.subMenuSection {
  width: 50vw;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  p {
    font-size: 1.2vw;
  }
}

.subMenuSection2 {
  width: 50vw;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0%;
}

.menuFooter {
  display: flex;
  align-items: center;
  padding: 5% 5%;
  background: white;

  p {
    font-family: "Monserrat-Regular";
    margin-right: 1%;
  }
}

.menuIcon {
  display: flex;
  box-sizing: border-box;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  justify-content: space-between;
  padding: 1% 1%;
  position: absolute;
  width: 100vw;
  top: 0;
}

.hamburger {
  z-index: 20;

}

.hamburger-inner {
  background-color: #740a64;
}

.hamburger-inner::before {
  background-color: #740a64;
}


.hamburger-inner::after {
  background-color: #740a64;
}

.hamburger.is-active .hamburger-inner, .hamburger.is-active .hamburger-inner::before, .hamburger.is-active .hamburger-inner::after {
  background-color: #740a64;
}




/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  .menuSection {
  height: 64vh;
}

.menuFooter {
  padding: 1% 5%;
}
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  
.menuSection {
  height: 64vh;
}

.menuFooter {
  padding: 1% 5%;
}
  
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  .menuSection {
  height: 64vh;
}

.menuFooter {
  padding: 1% 5%;
}
  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 376px) and (max-width: 767px) {
  
  .menu {
  box-sizing: border-box;
}

.logo {
  height: 15vw;
}

.navInfoContainer {
  margin-bottom: 0%;
}

.logoSection {
  width: 100vw;
  height: 20vh;
  padding: 5% 5% 0 5%;
}

.menuSection {
  background: white;
  flex-direction: column-reverse;
  height: 90vw;
 
}

.subMenuSection {
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100vw;
  height: 60vw;

  p {
    font-size: 3vw;
  }
}

.subMenuSection2 {
  margin-top: 5%;
  margin-bottom: 15%;
  width: 100vw;
  p {
    font-size: 6vw;
  }
}

.menuFooter {
  padding: 5% 5%;
  background: white;

  p {
    font-family: "Monserrat-Regular";
    font-size: 4vw;
    width: 34vw;
  }

  img {
    width: 10vw;
  }
}
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 375px) {

.menu {
  box-sizing: border-box;
}

.logo {
  height: 15vw;
}

.navInfoContainer {
  margin-bottom: 0%;
}

.logoSection {
  width: 100vw;
  height: 20vh;
  padding: 5% 5% 0 5%;
}

.menuSection {
  background: white;
  flex-direction: column-reverse;
  height: 100vw;
 
}

.subMenuSection {
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100vw;
  height: 60vw;

  p {
    font-size: 3vw;
  }
}

.subMenuSection2 {
  margin-top: 5%;
  margin-bottom: 15%;
  width: 100vw;
  p {
    font-size: 8vw;
  }
}

.menuFooter {
  padding: 5% 5%;
  background: white;

  p {
    font-family: "Monserrat-Regular";
    font-size: 4vw;
    width: 34vw;
  }

  img {
    width: 10vw;
  }
}

}

`;

export { NavWrapperStyle };
