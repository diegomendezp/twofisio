import styled from 'styled-components';


const FontLink = styled.a`
    font-family: "Monserrat-Semibold";
    font-size: 0.8rem;
    letter-spacing: 0.04rem;
    line-height: 1.3rem;
    color: rgb(116, 10, 100);
    text-decoration: none;

  
    @media only screen and (min-width: 414px) and (max-width: 768px) {
      font-size: 0.8rem;
    }
  
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
      font-size: 1rem;
    }
    
    @media only screen and (min-width: 1025px) and (max-width: 1440px) {
      font-size: 1rem;
    }
    
    @media only screen and (min-width: 1441px) {
      font-size: 1rem;
    }
`;

export default FontLink;
