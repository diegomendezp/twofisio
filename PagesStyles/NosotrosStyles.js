import styled from 'styled-components';

const NosotrosStyles = styled.div`
  max-width: 100vw;
  padding-top: 100px;
  font-family: "Monserrat-Regular";
  .accordion__body--hidden {
    display: none;
    opacity: 0;
    animation: fadein 0.35s ease-in;
}
@keyframes fadein {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
  .member-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .member-description {
    width: 90%;
    letter-spacing: 0.2px;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 25px;
  }

  p {
    width: 100%;
    letter-spacing: 0.2px;
    margin: 0 auto;
  }

  .accordion {
    border: 0;
    border-radius: 0;
    max-width: 100vw;
  }

  .member-info {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }

  .accordion__title {
    background-color: white;
    color: #444;
    cursor: pointer;
    outline: none;
    padding: 0px;
    width: 100%;
    text-align: left;
    border: none;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: 0 auto;
  }

  .member-name {
    color: #740a64;
    font-family: Monserrat-Semibold;
    letter-spacing: 0.6px;
  }

  .accordion__body {
    margin: 0 auto;

    margin-bottom: 5%;
    padding: 0px;

    animation: fadein 0.35s ease-in;
    width: 90%;
  }

  .team {
    width: 100%;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .member {
      width: 40%;
    }

    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .member-description {
      width: 80%;
      letter-spacing: 0.2px;
      margin: 0 auto;
      margin-bottom: 50px;
      margin-top: 25px;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    .member {
      width: 40%;
    }

    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .member-description {
      width: 80%;
      letter-spacing: 0.2px;
      margin: 0 auto;
      margin-bottom: 50px;
      margin-top: 25px;
    }
  }

  @media only screen and (min-width: 1441px) {
    
    .member {
      width: 40%;
    }

    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .member-description {
      width: 80%;
      letter-spacing: 0.2px;
      margin: 0 auto;
      margin-bottom: 50px;
      margin-top: 25px;
    }
  }
`;

export default NosotrosStyles;
