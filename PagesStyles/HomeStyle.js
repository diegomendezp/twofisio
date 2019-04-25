import styled from 'styled-components';

const HomeWrapperStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  /* position: relative; */
  font-weight: lighter;
  /* -webkit-overflow-scrolling: touch; */

  .sectionTitle {
    a {
      font-family: "Monserrat-Semibold";
      font-size: 0.8rem;
      letter-spacing: 0.04rem;
      line-height: 1.3rem;
      color: rgb(116, 10, 100);
      text-decoration: none;
    }
    a:visited {
      font-family: "Monserrat-Semibold";
      font-size: 0.8rem;
      letter-spacing: 0.04rem;
      line-height: 1.3rem;
      color: rgb(116, 10, 100);
      text-decoration: none;
    }
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
    width: 100vw;
    height: 100vh;
  }

  .sectionTitle {
    position: absolute;
    width: 20vw;
    top: calc(100vh / 2 - 15%);
    left: 5%;
    h1 {
      color: rgb(116, 10, 100);
    }
  }

  .imageHome {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-clip-path: url(#svgPath);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bubbleGroup {
    position: absolute;
    top: calc(100vh / 2 - 15%);
    right: 2.5%;
    display: flex;
    flex-direction: column;
    text-align: center;

    li {
      list-style-type: none;
    }
  }

  .position {
    z-index: 10;
    color: rgb(116, 10, 100);
  }

  .bubble {
    z-index: 10;
    width: 0.5px;
    height: 20px;
    border: 1px solid white;
    border-radius: 2px;
    margin: 100% 0%;
    box-shadow: 0px 0px 2px rgb(116, 10, 100);
  }

  .active {
    background: rgb(116, 10, 100);
    border: 1px solid rgb(116, 10, 100);
  }

  @keyframes markerAnimation {
    0%   {bottom: 6%}
    50% {bottom: 3%}
    100% {bottom: 6%}
  }

  @media only screen and (max-width: 415px) {

    @keyframes markerAnimation {
    0%   {bottom: 18%}
    50% {bottom: 15%}
    100% {bottom: 18%}
  }

    overflow: hidden;

    .sectionTitle {
      width: 60vw;
      justify-content: center;
    }

    .bubbleGroup {
      /* display: none; */
      top: calc(40%);
    }

    #bubbleFooter {
      display: none;
    }

    #imgSlider {
      padding-left: 38%;
    }

    .arrowImage {
      width: 10vw;
      object-fit: cover; 
      position: absolute;
      bottom: 18%;
      left: 3%;
      animation-name: markerAnimation;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .sectionTitle {
      justify-content: center;
      width: 50vw;
    }
    .arrowImage {
      width: 5vw;
      object-fit: cover; 
      position: absolute;
      bottom: 6%;
      left: 3%;
      animation-name: markerAnimation;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {

    @keyframes markerAnimation {
    0%   {bottom: 6%}
    50% {bottom: 3%}
    100% {bottom: 6%}
    }

    .sectionTitle {
      justify-content: center;
      width: 50vw;
    }

    .arrowImage {
      width: 3vw;
      object-fit: cover; 
      position: absolute;
      bottom: 6%;
      left: 4%;
      animation-name: markerAnimation;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    
  }

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    .sectionTitle {
      justify-content: center;
      width: 30vw;
    }

    .arrowImage {
      width: 3vw;
      object-fit: cover; 
      position: absolute;
      bottom: 6%;
      left: 3%;
      animation-name: markerAnimation;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

  }

  @media only screen and (min-width: 1441px) {

    .arrowImage {
      width: 3vw;
      object-fit: cover; 
      position: absolute;
      bottom: 6%;
      left: 3%;
      animation-name: markerAnimation;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  }
`;

export { HomeWrapperStyle };
