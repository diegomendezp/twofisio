import styled from 'styled-components';

const PilatesStyles = styled.div`
  font-family: "Monserrat-Regular";
  .pilates-img {
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
  .pilates-content {
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
   

    .pilates {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
   
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    .pilates-img {
      height: 50vh;
    }
    .pilates-content {
    width: 60%;
    margin-left: 5%;
  }

    .pilates {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 1441px) {
    .pilates-img {
      height: 50vh;
    }
    .pilates-content {
    width: 60%;
    margin-left: 5%;
  }

    .pilates {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

   
  }
`;

export default PilatesStyles;
