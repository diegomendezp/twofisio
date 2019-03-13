import styled from 'styled-components';

const FisioterapiaStyles = styled.div`
  font-family: "Monserrat-Regular";
  .techniques-img {
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
  .techniques-content {
    width: 90%;
    margin: 0 auto;
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
   
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    .techniques-img {
      height: 50vh;
    }
    .techniques-content {
    width: 60%;
    margin-left: 5%;
  }

    .techniques {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 1441px) {
    .techniques-img {
      height: 50vh;
    }
    .techniques-content {
    width: 60%;
    margin-left: 5%;
  }

    .techniques {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

   
  }
`;

export default FisioterapiaStyles;
