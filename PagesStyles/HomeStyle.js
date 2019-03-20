import styled from "styled-components";

const HomeWrapperStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  position: relative;
  font-family: "Monserrat-Semibold";
  font-weight: lighter;

  h1 {
    color: rgb(116, 10, 100);
  }

  p {
    color: rgb(37, 37, 37);
  }

  a {
    color: rgb(116, 10, 100);
    text-decoration: underline;
  }

  CrossfadeImage {
    widows: 100vw;
    height: 100vh;
  }

  #canvas {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
  }

  #container {
    position: absolute;
    left: 0;
  }

  .sectionTitle {
    position: absolute;
    width: 20vw;
    top: calc(100vh / 2 - 5%);
    left: 10%;
    h1 {
      color: rgb(116, 10, 100);
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    clip-path: url(#svgPath);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bubbleGroup {
    position: absolute;
    top: 50%;
    right: 5%;
    display: flex;
    flex-direction: column;
  }

  .bubble {
    z-index: 10;
    list-style-type: none;
    width: 15px;
    height: 15px;
    background: white;
    border: 1px solid rgb(116, 10, 100);
    border-radius: 50%;
    margin: 20% 0%;
  }

  .active {
    background: rgb(116, 10, 100);
  }

  @media only screen and (max-width: 415px) {
    .sectionTitle {
      width: 80vw;
    }

    .bubbleGroup {
      display: none;
    }
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    color: red;
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
  }

  @media only screen and (min-width: 1441px) {
  }
`;

export { HomeWrapperStyle };
