import styled from 'styled-components';

const NosotrosStyles = styled.div`
  max-width: 100vw;
  padding-top: 100px;
  font-family: "Monserrat-Regular";

  .member-img {
    width: 100%;
    height:200px;
    object-fit: cover;
  }

  .member-description {
    width: 90vw;
    letter-spacing: 0.2px;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 25px;
  }

  p{
    width: 90vw;
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
    width:90%;
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
`;

export default NosotrosStyles;
