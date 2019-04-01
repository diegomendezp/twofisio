import styled from 'styled-components';

const FisioterapiaStyles = styled.div`
  font-family: "Monserrat-Regular";

  #container {
    position: absolute;
  }
  .techniques-img {
    width: 100%;
    clip-path: url(#svgPath);
    object-fit: cover;
  }


  .treatment-name{
    font-family: "Monserrat-Semibold";
    color: #740a64;;
  
    
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
  .technique{
    margin-bottom:10%;
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
      margin-bottom: 10%;
    }
   
  }

  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    .techniques-img {
      height: 30vh;
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
