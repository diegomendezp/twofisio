import styled from 'styled-components';

const FooterStyles = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Monserrat-Regular";
  width: 100%;
  position: fixed;
  bottom: 0;
  color: white;
  background-color:  rgba(116, 10, 100, 0.9);
  .contact {
    font-family: "Monserrat-Semibold"
  }

  .footer-content {
    width: 80%;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    list-style: none;
  }
  a:visited{
    color: white;
  }
`;

export default FooterStyles;
