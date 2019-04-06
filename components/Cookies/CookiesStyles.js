import styled from 'styled-components';

export const CookieWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'white')};
  color: ${props => (props.color ? props.color : 'black')};
  display: ${props => (props.display ? props.display : 'flex')};
  justify-content: space-around;
  transition: all 1s ease 0s;
  padding-top: 1em;

  -moz-box-shadow: 0.5px 0.5px 2px 2px #00000011;
  -webkit-box-shadow: 0.5px 0.5px 2px px #00000011;
  box-shadow: 0.5px 0.5px 2px 2px #00000011;

  a {
    color: ${props => (props.color ? props.color : 'black')};
  }

  a:visited {
    color: ${props => (props.color ? props.color : 'black')};
  }

  .cookies-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 70%;

    p {
      text-align: left;
      margin-top: 0;
      margin-bottom: 1.2em;
      font-size: 1.1rem;
    }

    button {
      text-align: left;
      padding: 0;
      outline: none;
      margin-bottom: 1.2em;
      border: none;
      background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'white')};
      font-family: "Monserrat-Semibold";
      color: #740a64;
      font-size: 1.2rem;
      letter-spacing: 0.04rem;
      width: 70%;
    }
  }
  .logo {
    height: 50px;
    object-fit: cover;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .cookies-content {
      width: 75%;
      button {
        width: 30%;
      }
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .cookies-content {
      width: 75%;
      button {
        width: 30%;
      }
    }
  }

  @media only screen and (min-width: 1025px) {
    width: 60%;
    border: 1px solid white;
    border-radius: 2px;
    .cookies-content {
      width: 80%;
      button {
        width: 30%;
      }
    }
  }
`;
