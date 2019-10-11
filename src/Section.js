import styled from 'styled-components'

const Wrap = styled.div`
  padding: 4rem 0;
  background-image: ${props => props.img ? "url("+props.img+")" : ""};
  background-size: cover;
  background-color: ${props => props.bgcolor ? props.bgcolor : "white"};
`
export default Wrap
