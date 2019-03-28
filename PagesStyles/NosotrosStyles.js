import styled from 'styled-components';

const NosotrosStyles = styled.div`
  max-width: 100vw;
  margin-bottom: 15%;
  padding-top: 100px;

  font-family: "Monserrat-Regular";
    color: black;
    font-size: 1rem;
    letter-spacing: 0.03rem;
    line-height: 1.45rem;

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
    height: 300px;
    object-fit: cover;
  }

  .member-description {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 30%;
    margin-top: 15%;
  }

  .accordion {
    border: 0;
    border-radius: 0;
    max-width: 100vw;
  }

  .member-info {
    width: 100%;
    margin: 0 auto;
  }

  .accordion__title {
    background-color: white;
    color: black;
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
    font-family: "Monserrat-Semibold";
    color: #740a64;
    font-size: 1rem;
    letter-spacing: 0.03rem;
    margin-bottom:0;
  }
  .member-cole{
    margin-top: 0%;
    font-family: "Monserrat-Regular";
    color: black;
    font-size: 1rem;
    letter-spacing: 0.03rem;
    line-height: 1.45rem;
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
    .member-img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .member {
      width: 40%;
    }

    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .member-description {
      width: 60%;
      margin-left: 5%;
      margin-top: 8%;
      margin-bottom: 10%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    .member-img {
      width: 100%;
      height: 350px;
      object-fit: cover;
    }
    
    .member {
      width: 40%;
    }

    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .member-description {
      width: 60%;
      margin-left: 5%;
      margin-top: 8%;
      margin-bottom: 10%;
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
      width: 60%;
      margin-left: 5%;
      margin-top: 8%;
      margin-bottom: 10%;
    }
    .member-img{
      height: 350px;
    }
  }
`;

export default NosotrosStyles;
