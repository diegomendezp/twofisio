import styled from 'styled-components';


const FontRegular = styled.p`
    font-family: "Monserrat-Regular";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 1rem;
    letter-spacing: 0.04rem;
    line-height: 1.45rem;



  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    font-family: "Monserrat-Regular";
    color: ${props => (props.color === 'white' ? 'white' : 'black')};
    font-size: 1rem;
    letter-spacing: 0.04rem;
    line-height: 1.45rem;

  }

  @media only screen and (min-width: 1441px) {
    
  }
`;

export default FontRegular;
