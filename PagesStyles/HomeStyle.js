import styled from "styled-components";

const HomeWrapperStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  position: relative;
  font-family: "Monserrat-Semibold";
  font-weight: lighter;
  -webkit-overflow-scrolling: touch;

  #bodyHome {
  }

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
    width: 100vw;
    height: 100vh;
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
    -webkit-clip-path: url(#svgPath);
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
    width: 10px;
    height: 10px;
    border: 1px solid white;
    border-radius: 50%;
    margin: 20% 0%;
    box-shadow: 0px 0px 2px rgb(116, 10, 100);
  }

  .active {
    background: rgb(116, 10, 100);
    border: 1px solid rgb(116, 10, 100);
  }

  @media only screen and (max-width: 415px) {
    overflow: hidden;

    .sectionTitle {
      width: 80vw;
      top: calc(100vh / 2 - 16%);
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
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    color: red;
    #bubbleFooter {
      display: none;
    }
    .sectionTitle {
      top: calc(100vh / 2 - 25%);
      width: 40vw;
      h1 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.8rem;
      }
      a {
        font-size: 1.8rem;
      }
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
  }

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
  }


  @media only screen and (min-width: 1441px) {
  }
`;

export { HomeWrapperStyle };
