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
    margin-top: 30%;
    margin-bottom: 5%;

  }
  .footerLogo{
    width: 10%;
    margin-left: 2%;
  }
  .copyright {
    display: flex;
    align-items: center;
    margin-top: 10%;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    list-style: none;
    color: white;
  }
  a:visited{
    color: white;
  }

  .contact-name{
    margin-bottom: 0;
  }
  .contact-value{
    margin-top: 0;
  }
  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    .footerLogo{
      width: 5%;
      margin-left: 2%;
    }
    .footer-content {
      margin-bottom: 2%;
      margin-top: 25%;
    }
    .copyright{
      margin-top:5%
    }
  }
  @media only screen and (min-width: 1441px) {
    .footer-content {
      width: 90%;
      margin-top: 6%;
      margin-bottom: 1%;
    }
    .footerLogo{
      width: 4%;
    margin-left: 2%;
    }
    .copyright{
      margin-top: 5%;
    }
  }
`;


export const FooterWrapper = styled.div`
  width: 100%;
  background-color: #740A64E6;
  
  display: flex;
    justify-content: center;
`;

export default FooterStyles;
