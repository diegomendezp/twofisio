import styled from 'styled-components';
import map from './map.png';

const FooterStyles = styled.div`

  font-family: "Monserrat-Regular";
  width: 100%;

  color: white;
 
  background-position: center;
  background-size: cover;
  background-image: url(${map});
  .contact {
    font-family: "Monserrat-Semibold"
  }

  .footer-content {
    width: 90%;
    
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

export const FooterWrapper = styled.div`
  width: 100%;
  background-color:  rgba(116, 10, 100, 0.8);
  display: flex;
    justify-content: center;
`;

export default FooterStyles;
