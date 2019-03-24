import styled from "styled-components";

const HeaderAnimatedStyles = styled.div`

  background-image: url(${props => props.backImage});
  width: 100vw;
  height: 50vh;
  clip-path: url(#svgPath);
  background-position-y: ${props => props.backPositionY}%;
  background-size: 100%;

  font-family: "Monserrat-Regular";
  #container {
    position: absolute;
  }
  /* .techniques-img {
    width: 100%;
    clip-path: url(#svgPath);
    object-fit: cover;
  } */

  @media only screen and (max-width: 415px) {
    background-position-x: 28%;
    background-size: 196%;  
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    height: 33vh;
    background-position-y: 0%;

  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
  }

  @media only screen and (min-width: 1441px) {
  }
`;

export default HeaderAnimatedStyles;
