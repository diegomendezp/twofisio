import styled from 'styled-components';

const FontBold = styled.h2`
  font-family: "Monserrat-Semibold";
  color: ${props => (props.color === 'white' ? 'white' : '#740a64')};
  font-size: ${props => (props.menu ? '1rem' : '1.5rem')};
  letter-spacing: 0.04rem;
  margin: ${props => (props.menu ? '0' : '')};
  cursor: ${props => (props.menu ? 'pointer' : '')};

  @media only screen and (min-width: 415px) and (max-width: 768px) {
    font-size: ${props => (props.menu ? '1rem' : '1.5rem')};
  }
  @media only screen and (min-width: 769px) and (max-width: 1440px) {
    font-size: ${props => (props.menu ? '1.25rem' : '1.5rem')};
  }
  @media only screen and (min-width: 1441px) {
    font-size: ${props => (props.menu ? '1.25rem' : '1.5rem')};
  }
`;

export default FontBold;
