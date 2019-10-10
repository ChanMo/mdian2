import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
  width: 3px;
  height: 50px;
  background: rgba(32, 56, 88, 0.8);
`

const Wrap = styled.div`
  width: 6px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Dot = styled.span`
  font-size: 600;
  color: rgba(32, 56, 88, 1);
`

export default function Dian() {
  return (
    <Wrap>
      <Dot>+</Dot>
      <Line />
    </Wrap>
  )
}
