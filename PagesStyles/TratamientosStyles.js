import styled from 'styled-components';

const TratamientosStyles = styled.div`
  font-family: "Monserrat-Regular";
  .treatments-img {
    width: 100%;
    object-fit: cover;
  }

  .treatment-name{
    font-family: "Monserrat-Semibold";
    color: #740a64;
  }
  .treatments-content {
    width: 90%;
    margin: 0 auto;
  }
  .treatment {
    margin-bottom:10%;
  }
  .treatments{
    margin-bottom: 50%;
  }

  li {
    list-style: none;
    letter-spacing: 0.2px;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    .treatment {
      width: 48%;
      margin-bottom:3%;
    }

    .treatments {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 15%;
    }
   
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    .treatments-img {
      height: 50vh;
    }
    .treatment {
      width: 48%;
      margin-bottom:1%;
    }

    .treatments {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 15%;
    }
  }

  @media only screen and (min-width: 1441px) {
    .treatments-img {
      height: 48vh;
    }
    .treatments-content{
      margin-top: 1%;
     
    }
    .treatment {
      width: 48%;
      margin-bottom: 5%;
    }

    .treatments {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

   
  }
`;

export default TratamientosStyles;
