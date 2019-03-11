import styled from 'styled-components';

const NavbarStyles = styled.div`
  font-family: "Monserrat-Semibold";
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(116, 10, 100);
  width: 100%;
  max-width: 100vw;
  position: fixed;
  top: 0;

  img {
    height: 80px;
    object-fit: contain;
    margin-left: 20px;
    
  }

  ul {
    margin-right: 20px;
    a {
      list-style: none;
      text-decoration: none;
      font-size: 1.25vw;
      letter-spacing:0.6pt;
    }

    a:visited {
      color: rgb(116, 10, 100);
    }
  }
`;

export default NavbarStyles;
