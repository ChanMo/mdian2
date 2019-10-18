import React from 'react'
import styled from 'styled-components'

const Wrap = styled.h3`
  margin: 1rem 0 2rem;
  position: relative;
  font-weight: 800;
  text-align: center;
  font-size: 1.4rem;
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
    ${props => props.theme === "wechat" && "background:rgba(0, 194, 80, 1);"}
  }
`

const Sub = styled.span`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
  color: ${props => props.dark ? "rgba(38, 80, 154, 0.2)" :  "rgba(255, 255, 255, 0.2)"};
  ${props => props.theme === "wechat" && "color:rgba(0, 194, 80, 0.2);"}
  font-size: 1.2rem;
  letter-spacing: 3px;
`

export default function Subtitle({text, second=null, dark=true, theme='default'}) {
  return (
    <Wrap dark={dark} theme={theme}>
      {text}
      {second && <Sub dark={dark} theme={theme}>{second}</Sub>}
    </Wrap>
  )
}
