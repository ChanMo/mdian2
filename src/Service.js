import React from 'react'
import styled from 'styled-components'
import { Box, Container, Grid } from '@material-ui/core'
import Subtitle from './Subtitle'
import bg from './images/bg2.jpg'

const Wrap = styled.div`
  position: relative;
  padding: 2rem 0;
  background-color: rgba(20,27,45,0.8);
  &:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`

const data = [
  [require('./images/step1.png'),'需求'],
  [require('./images/step2.png'),'报价'],
  [require('./images/step3.png'),'签约'],
  [require('./images/step4.png'),'UI设计'],
  [require('./images/step5.png'),'开发'],
  [require('./images/step6.png'),'签收'],
  [require('./images/step7.png'),'售后'],
]

export default function Service() {
  return (
    <Wrap>
      <Container maxWidth="lg">
        <Subtitle text='服务流程' second='SERVICE' dark={false} />
        <Box pt={6} pb={4}>
        <Grid container justify="center">
        {data.map((item, index) => (
        <Grid item sm xs={3} key={index}>
          <Box textAlign="center" color="rgba(79, 144, 216, 1)" fontSize={16}>
            <img src={item[0]} alt={item[1]} width={64} height={64} />
            <p>{item[1]}</p>
          </Box>
        </Grid>
        ))}
        </Grid>
        </Box>
      </Container>
    </Wrap>
  )
}
