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
    height: 80px;
    object-fit: contain;

    
  }

  ul {

    a {
      list-style: none;
      text-decoration: none;
      font-size: 20px;
      letter-spacing:0.6pt;
    }

    a:visited {
      color: rgb(116, 10, 100);
    }
  }
`;

const NavbarStyles = styled.div`
  display: flex;
  justify-content: center;
`;

export { NavbarWrapper, NavbarStyles };
