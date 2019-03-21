import styled from 'styled-components';
// import ecographyPhoto from '../static/imgEcografía2.jpg';

const EcographyStyles = styled.div`
  font-family: "Monserrat-Regular";
  .ecography-img {
    width: 100%;
    object-fit: cover;
  }

  h2 {
    font-family: "Monserrat-Semibold";
    color: #740a64;
    letter-spacing: 0.2px;
  }
  .treatment-name{
    font-family: "Monserrat-Semibold";
    color: #740a64;
  }
/*   
  .back-photo{

    background-image: url(${ecographyPhoto});
    background-size: cover;
    background-position: center;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: 100%;
  } */
  .ecography-content {
    width: 90%;
    margin: 0 auto;
    opacity: 1;
  }
  li {
    list-style: none;
    letter-spacing: 0.2px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
   

    .ecography {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
   
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    .ecography-img {
      height: 50vh;
    }
    .ecography-content {
    width: 60%;
    margin-left: 5%;
  }

    .ecography {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 1441px) {
    .ecography-img {
      height: 48vh;
    }
    .ecography-content {
    width: 60%;
    margin-left: 5%;
    margin-top: 8%;
    margin-bottom: 10%;

  }

    .ecography {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

   
  }
`;

export default EcographyStyles;
