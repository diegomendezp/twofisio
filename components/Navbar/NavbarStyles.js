import styled from 'styled-components';

const NavbarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: rgb(116, 10, 100);

  img {
    width: 5%;
    height: 50px;
    object-fit: cover;
  }

  ul {
    li {
      list-style: none;
    }
  }
`;

export default NavbarStyles;
