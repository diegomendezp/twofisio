import styled from 'styled-components';

const NavbarWrapper = styled.div`
  z-index: 100;
  font-family: "Monserrat-Semibold";
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(116, 10, 100);
  width: 90%;
  max-width: 100vw;
  position: fixed;
  top: 0;
  margin: 0 auto;

  img {
    margin-top:3%;
    height: 50px;
    object-fit: contain;  
  }

  ul {

    a {
      list-style: none;
      text-decoration: none;
      font-size: 1rem;
      letter-spacing:0.6pt;
      color: rgb(116, 10, 100);
    }

    a:visited {
      color: rgb(116, 10, 100);
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    img {
      margin-top:3%;
      height: 60px;
      object-fit: contain;  
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    img {
      margin-top:3%;
      height: 60px;
      object-fit: contain;  
    }
  }


  @media only screen and (min-width: 1441px) {}

`;

const NavbarStyles = styled.div`
  display: flex;
  justify-content: center;
`;

export { NavbarWrapper, NavbarStyles };
