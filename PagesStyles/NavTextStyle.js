import styled from 'styled-components';

const NavTextStyle = styled.p`
/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/
cursor: pointer;
margin: 0;
padding: 0;
font-size: ${props => (props.title ? "2.6vw" : "1.2vw")};
margin-bottom: ${props => props.margin && '1%'};
font-family: "Monserrat-Semibold";
color: #740a64;
letter-spacing: 0.2px;


@media (min-width: 1281px) {
  
}


@media (min-width: 1025px) and (max-width: 1280px) {
  
}


@media (min-width: 768px) and (max-width: 1024px) {
  
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
}



@media (min-width: 481px) and (max-width: 767px) {

}


@media (min-width: 320px) and (max-width: 480px) {


    font-family: "Monserrat-Semibold";
    color: #740a64;
    font-size: 1.5rem;
    -webkit-letter-spacing: 0.04rem;
    -moz-letter-spacing: 0.04rem;
    -ms-letter-spacing: 0.04rem;
    letter-spacing: 0.04rem;
}

`;

export { NavTextStyle };
