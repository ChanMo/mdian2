import React from 'react'
import styled from 'styled-components'

const Wrap = styled.h3`
  margin: 1rem 0 2rem;
  position: relative;
  font-weight: 800;
  text-align: center;
  color: ${props => props.dark ? 'rgba(32, 56, 88, 1)' : 'white'};
  &:after {
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translate(-50%, 0);
    display: block;
    content: '';
    width: 50px;
    height: 4px;
    background: rgba(55, 92, 161, 1);
  }
`

const Sub = styled.span`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  color: ${props => props.dark ? "rgba(38, 80, 154, 0.2)" :  "rgba(255, 255, 255, 0.2)"};
  font-size: 1.2rem;
  letter-spacing: 3px;
`

export default function Subtitle({text, second=null, dark=true}) {
  return (
    <Wrap dark={dark}>
      {text}
      {second && <Sub dark={dark}>{second}</Sub>}
    </Wrap>
  )
}
