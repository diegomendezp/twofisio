import styled from 'styled-components';

const HeaderAnimatedStyles = styled.div`
  position: relative;
  width: 100vw;
  height: 70vh;
  background-image: url(${props => props.backImage});
  -webkit-clip-path: url(#svgPath);
  background-position-y: ${props => props.backPositionY}%;
  background-size: 100%;

  #container {
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    
  }
  /* .techniques-img {
    width: 100%;
    clip-path: url(#svgPath);
    object-fit: cover;
  } */

 
  
  @media only screen and (max-width: 360px) {
    background-position-x: 100%;
    background-size: 150%;  
    height: 60vh;
  }
  
  @media only screen and (min-width: 361px) and (max-width: 415px) {
    background-position-x: 60%;
    background-position-y: 0%;
    background-size: 140%;  
    height: 45vh;
  }

  @media screen and (orientation: landscape) and (max-height: 414px){
    height: 60vh;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    height: 40vh;
    background-position-y:30%;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    height: 38vh;
    background-position-y: 35%;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    height: 80vh;
    background-position: cover;
    background-position-y: 40%;
  }

  @media only screen and (min-width: 1441px) {
    height: 70vh;
    background-position-y: 50%;
   
  }

  @media screen and (orientation: landscape) and (max-height: 414px){
    height: 70vh;
  }
`;

export default HeaderAnimatedStyles;
