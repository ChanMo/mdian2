import React from 'react'
import Section from './Section'
import Navigation from './Navigation'
import Footer from './Footer'
import Subtitle from './Subtitle'
import { Box, Grid, Container } from '@material-ui/core'

function First() {
  return (
      <Box textAlign="center">
        <img src={require("./images/banner_douyin.png")} alt="douyin" />
      </Box>
  )
}

function Entry() {
  const data = [
    require("./images/douyin_05.png"),
    require("./images/douyin_06.png"),
    require("./images/douyin_07.png"),
  ]
  return (
    <Section>
      <Container maxWidth="md">
        <Subtitle text="流量入口" second="TRAFFIC ENTRY" />
        <Grid container>
          {data.map((item,index) => (
          <Grid key={index} item xs={12} sm={4}>
            <Box p={2}>
            <img src={item} alt="douyin" />
            </Box>
          </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

function Center() {
  return (
    <Section>
      <Container maxWidth="md">
      <Subtitle text="流量矩阵" second="FLOW PLATFORM" />
      <Box py={8} textAlign="center">
        <img src={require("./images/douyin_01.png")} alt="douyin" />
      </Box>
      <Box py={8} textAlign="center">
        <img src={require("./images/douyin_02.png")} alt="douyin" />
      </Box>
      </Container>
    </Section>
  )
}

function Feature() {
  return (
    <Section>
      <Container maxWidth="md">
        <Subtitle text="抖音小程序特点" second="DOUYIN FEATURES" />
        <Box py={8} textAlign="center">
          <img src={require("./images/douyin_03.png")} alt="douyin" />
        </Box>
      </Container>
    </Section>
  )
}

function Advantage() {
  return (
    <Section>
      <Container maxWidth="sm">
        <Box textAlign="center">
        <img src={require("./images/douyin_04.png")} alt="douyin" />
        </Box>
      </Container>
    </Section>
  )
}

function Show() {
  const data = [
    require("./images/douyin_10.png"),
    require("./images/douyin_11.png"),
    require("./images/douyin_12.png"),
    require("./images/douyin_13.png"),
    require("./images/douyin_14.png"),
    require("./images/douyin_15.png"),
  ]
  return (
    <Section img={require("./images/douyin_bg.png")}>
      <Container maxWidth="md">
        <Subtitle text="案例展示" second="CASE SHOW" />
        <Box py={8}>
          <Grid container>
            {data.map((item, index) => (
              <Grid item xs={6} sm={4} key={index}>
                <img src={item} alt="mdian" width="100%" />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  )
}

export default function DouyinScreen() {
  return (
    <div>
      <Navigation />
      <First />
      <Entry />
      <Center />
      <Feature />
      <Advantage />
      <Show />
      <Footer />
    </div>
  )
}
