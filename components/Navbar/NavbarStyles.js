import styled from 'styled-components';

const NavbarWrapper = styled.div`
  /* z-index: 100; */
  font-family: "Monserrat-Semibold";
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(116, 10, 100);
  width: 95%;
  max-width: 100vw;
  /* position: fixed; */
  /* top: 0; */
  margin: 0 auto;

  img:hover{
    cursor: pointer;
  }

  img {
    margin-top:0.5%;
    height: 50px;
    object-fit: contain;  
    padding-bottom: 1%;
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
      margin-top:1%;
      height: 60px;
      object-fit: contain;  
    }
  }


`;

const NavbarStyles = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top:0;
  width: 100%;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  transition: all 0.5s ease 0s;
  box-sizing: border-box;
`;

export { NavbarWrapper, NavbarStyles };
