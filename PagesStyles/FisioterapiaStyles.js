import styled from 'styled-components';

const FisioterapiaStyles = styled.div`
  font-family: "Monserrat-Regular";
  .techniques-img {
    width: 100%;
    object-fit: cover;
  }
  .technique {
    font-family: "Monserrat-regular";
    color: black;
    font-size: 1rem;
    letter-spacing: 0.03rem;
    line-height: 1.45rem;
  }

  .treatment-name{
    font-family: "Monserrat-Semibold";
    color: #740a64;;
    font-size: 1rem;
    letter-spacing: 0.03rem;
    line-height: 1.45rem;
    
  }
  .techniques-content {
    width: 90%;
    margin: 0 auto;
    margin-left: 5.5%;
    margin-top: 20%;
    margin-bottom: 30%;
  }

  li {
    list-style: none;
    letter-spacing: 0.2px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
   

    .techniques {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .techniques-content {
      width: 90%;
      margin: 0 auto;
      margin-left: 5.5%;
      margin-top: 10%;
      margin-bottom: 20%;
    }
   
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    .techniques-img {
      height: 25vh;
    }
    .techniques-content {
    width: 60vw;
    margin-left: 5.5%;
    margin-top: 8%;
    margin-bottom: 10%;
  }

    .techniques {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 1441px) {
    .techniques-img {
      height: 48vh;
    }
    .techniques-content {
    width: 60vw;
    margin-left: 5.5%;
    margin-top: 8%;
    margin-bottom: 10%;
  }

    .techniques {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

   
  }
`;

export default FisioterapiaStyles;
