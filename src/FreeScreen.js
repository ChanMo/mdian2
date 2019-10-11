import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import styled from 'styled-components'
import { Box, Grid, Container } from '@material-ui/core'

const Wrap = styled.div`
  position: relative;
  ::before {
    display: block;
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(${require("./images/free_bg.png")});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`
function Main() {
  return (
    <Box py={10}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={2}>
            <img src={require("./images/free_01.png")} alt="mdian" />
          </Grid>
          <Grid item xs={10}>
            <img src={require("./images/free_02.png")} alt="mdian" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

function Content() {
  return (
    <Box py={10}>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <img src={require("./images/free_03.png")} alt="mdian" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box p={2}>
              <img src={require("./images/free_04.png")} alt="mdian" />
            </Box>
          </Grid>
        </Grid>
    </Box>
  )
}

function Req() {
  return (
    <Box py={10}>
      <Container maxWidth="md">
        <img src={require("./images/free_05.png")} alt="mdian" />
      </Container>
    </Box>
  )
}

export default function FreeScreen() {
  return (
    <Wrap>
      <Navigation light />
      <Main />
      <Content />
      <Req />
      <Footer light />
    </Wrap>
  )
}
