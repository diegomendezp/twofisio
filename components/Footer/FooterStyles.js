import styled from 'styled-components';

const FooterStyles = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Monserrat-Regular";
  background-image: url("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.8428344035547!2d-3.7687657846048888!3d40.39017577936813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418841d4721fb1%3A0xca2e5c8775a8ff47!2sAv.+del+Padre+Piquer%2C+39%2C+28024+Madrid!5e0!3m2!1ses!2ses!4v1552322530909");
  width: 100%;
  position: fixed;
  bottom: 0;
  color: white;
  background-color:  rgba(116, 10, 100, 0.9);
  .contact {
    font-family: "Monserrat-Semibold"
  }

  .footer-content {
    width: 80%;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    list-style: none;
  }
  a:visited{
    color: white;
  }
`;

export default FooterStyles;
