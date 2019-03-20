import styled from 'styled-components';

const PilatesStyles = styled.div`
  font-family: "Monserrat-Regular";
  .pilates-img {
    width: 100%;
    object-fit: cover;
  }
  .treatment-name{
    font-family: "Monserrat-Semibold";
    color: #740a64;
  }
  .pilates-content {
    width: 90%;
    margin-left: 5%;
    margin-top: 15%;
    margin-bottom: 30%;
  }

  li {
    list-style: none;
    letter-spacing: 0.2px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
   

    .pilates {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .pilates-content {
      width: 60%;
      margin-left: 5%;
      margin-top: 8%;
      margin-bottom: 10%;
    }
   
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    .pilates-img {
      height: 33vh;
    }
    .pilates-content {
      width: 60%;
      margin-left: 5%;
      margin-top: 8%;
      margin-bottom: 10%;
  }

    .pilates {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 1441px) {
    .pilates-img {
      height: 48vh;
    }
    .pilates-content {
      width: 60%;
      margin-left: 5%;
      margin-top: 8%;
      margin-bottom: 10%;
    }

    .pilates {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

   
  }
`;

export default PilatesStyles;
