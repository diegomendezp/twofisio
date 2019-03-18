import styled from 'styled-components';


const FontBold = styled.h2`
    font-family: "Monserrat-Semibold";
    color: ${props => (props.color === 'white' ? 'white' : '#740a64')};
    font-size: 1.5rem;
    letter-spacing: 0.04rem;
`;

export default FontBold;
