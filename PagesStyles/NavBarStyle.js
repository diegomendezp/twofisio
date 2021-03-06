import styled from 'styled-components';

const NavWrapperStyle = styled.div`
width: 100vw;
height: ${props => (props.lvisible ? '20vh' : '100vh')};
padding: 0;
display: ${props => (props.visible ? 'flex' : 'none')};
justify-content: space-between;
align-items: center;
position: fixed;
z-index: ${props => (props.position ? 0 : 10)};
overflow: hidden;
animation-delay: 0.4s;
z-index: 10;

.hamburger .hamburger--spin {
  box-shadow: none;
  border:none;
}
.navLogo {
  height: 9vh;
  object-fit: cover;
  z-index: ${props => (props.lvisible ? '1' : '-1')}

  
}
.navInfoContainer {
  margin-bottom: 2%;
  .navInfo {
    a {
      color: black;
      text-decoration: none;
    }
  }
}
.navInfo {
  font-family: "Monserrat-Regular";
  margin: 2% 0;
}
.logoSection {
  height: 15vh;
  padding: 2% 5%;
  cursor: pointer;
  z-index: 10;
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
  overflow: hidden;
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
}
.subMenuSection2 {
  width: 50vw;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0%;
  p {
    font-family: "Monserrat-Semibold";
    color: #740a64;
    font-size: 1.5rem;
  }
}
.menuFooter {
  display: flex;
  align-items: center;
  padding: 5% 5%;
  background: white;
  width: 100vw;

  img {
    width: 3vw;
    margin-left: 1%;
  }

  p {
    font-family: "Monserrat-Regular";
    font-size: 1rem;
    
    a {
      text-decoration: none;
      color: #740a64;
    }
  }
}
.menuIcon {
  display: flex;
  box-sizing: border-box;
  background-color: ${props => (props.backgroundColor && props.position ? props.backgroundColor : 'transparent')};
  justify-content: space-between;
  padding: 1% 2%;
  position: absolute;
  width: 100vw;
  top: 0;
}
.hamburger {
  z-index: 20;
  outline: none;
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

.navInfo {
  font-size: 1.1rem;
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

@media (min-width: 568px) and (max-width: 1024px) {

.navLogo {
  height: 9vh;
}

.menuIcon {
  align-items: center;
}
  
.menuSection {
  height: 64vh;
}

.subMenuSection2 {
  p {
    width: 36vw;
  }
}

.menuFooter {
  padding: 1% 5%;
  width: 100vw;
  img {
    width: 4vw;
    margin-left: 1%;
  }
}

}


@media screen and (orientation: landscape) and (max-height: 414px) {


.navLogo {
  height: 17vh;
  }

.logo {
  height: 10vw;
  margin-top: 5%;
}
.navInfoContainer {
  margin-bottom: 0%;
  .navInfo {
    font-size: 0.7rem;
    a {
      color: black;
      text-decoration: none;
    }
  }
}
.logoSection {
  width: 100vw;
  height: 45vh;
  padding: 0% 5% 0 5%;
}
.menuSection {
  background: white;
  flex-direction: row;
  height: 98vw;
 
}
.subMenuSection {
  background: transparent;
  width: 50vw;
  margin-top: -5%;
}
.subMenuSection2 {
  margin-top: -10%;
  width: 50vw;
  p {
    width: 50vw;
    font-family: "Monserrat-Semibold";
    color: #740a64;
    font-size: 1.5rem;
    -webkit-letter-spacing: 0.04rem;
    -moz-letter-spacing: 0.04rem;
    -ms-letter-spacing: 0.04rem;
    letter-spacing: 0.04rem;
  }
}
.menuFooter {
  margin-bottom: 5%;
  padding: 0% 5%;
  background: white;
  p {
    font-family: "Monserrat-Regular";
    font-size: 2vw;
  }
  img {
    width: 5vw;
  }
}


  
}


@media (min-width: 376px) and (max-width: 567px) {
  

.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after{
  width: 30px;
  height: 4px;
}
.menu {
  box-sizing: border-box;
}
.logo {
  height: 15vw;
}
.navInfoContainer {
  margin-bottom: 0%;
  p {
    a {
      color: black;
      text-decoration: none;
    }
  }
}
.logoSection {
  width: 100vw;
  height: 16vh;
  padding: 5% 5% 0 5%;
}
.menuSection {
  background: white;
  flex-direction: column-reverse;
  height: 98vw;
 
}
.subMenuSection {
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100vw;
  height: 44vw;
}
.subMenuSection2 {
  margin-top: 5%;
  margin-bottom: 8%;
  width: 100vw;
  p {
    width: 100vw;
    font-family: "Monserrat-Semibold";
    color: #740a64;
    font-size: 1.5rem;
    -webkit-letter-spacing: 0.04rem;
    -moz-letter-spacing: 0.04rem;
    -ms-letter-spacing: 0.04rem;
    letter-spacing: 0.04rem;
  }
}
.menuFooter {
  padding: 5% 5%;
  background: white;
  p {
    font-family: "Monserrat-Regular";
    font-size: 4vw;
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

.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after{
  width: 30px;
  height: 4px;
}

.menu {
  box-sizing: border-box;
}

.logo {
  height: 15vw;
}

.navInfoContainer {
  margin-bottom: 0%;

  .navInfo {
    a {
      color: black;
      text-decoration: none;
    }
  }
}

.logoSection {
  width: 100vw;
  height: 20vh;
  padding: 5% 5% 0 5%;
}

.menuSection {
  background: white;
  flex-direction: column-reverse;
  height: 105vw;
 
}

.subMenuSection {
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100vw;
  height: 60vw;
}

.subMenuSection2 {
  margin-top: 5%;
  margin-bottom: 15%;
  width: 100vw;
  p {
    width: 100vw;
    font-family: "Monserrat-Semibold";
    color: #740a64;
    font-size: 1.5rem;
    -webkit-letter-spacing: 0.04rem;
    -moz-letter-spacing: 0.04rem;
    -ms-letter-spacing: 0.04rem;
    letter-spacing: 0.04rem;
  }
}

.menuFooter {
  padding: 5% 5%;
  background: white;

  p {
    font-family: "Monserrat-Regular";
    font-size: 4vw;
  }

  img {
    width: 10vw;
  }
}

}


`;

export { NavWrapperStyle };
