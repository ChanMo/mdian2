import React from 'react'
import Section from './Section'
import Subtitle from './Subtitle'
import Navigation from './Navigation'
import Footer from './Footer'
import { Box, Grid, Container } from '@material-ui/core'

function First() {
  return (
      <Box textAlign="center">
        <img src={require("./images/banner_wechat.png")} alt="wechat" />
      </Box>
  )
}

function Intro() {
  return (
    <Section>
      <Container maxWidth="md">
        <Subtitle text="什么是小程序" second="Applets" />
        <Box py={8}>
          <img src={require("./images/wechat_01.png")} alt="wechat" />
        </Box>
      </Container>
    </Section>
  )
}

function Center() {
  return (
    <Section img={require("./images/bg5.png")}>
      <Container maxWidth="md">
        <Subtitle text="流量入口" second="TRAFFIC ENTRY" dark={false} />
        <Box py={8}>
          <img src={require("./images/wechat_02.png")} alt="wechat" />
        </Box>
      </Container>
    </Section>
  )
}

function Reason() {
  return (
    <Section>
      <Container maxWidth="md">
        <Subtitle text="选择理由" second="REASON" />
        <Box py={8}>
          <img src={require("./images/wechat_03.png")} alt="wechat" />
        </Box>
      </Container>
    </Section>
  )
}

function Show() {
  const data = [
    require("./images/case_wine.png"),
    require("./images/case_rank.png"),
    require("./images/case_shui.png"),
    require("./images/case_uzu_wxa.png"),
    require("./images/case_mdshop1.png"),
    require("./images/case_mdshop2.png"),
  ]
  return (
    <Section bgcolor="rgba(64, 67, 67, 1)">
      <Container maxWidth="md">
        <Subtitle text="案例展示" second="CASE SHOW" dark={false} />
        <Box py={8}>
          <Grid container>
            {data.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Box p={1}>
                  <img src={item} alt="mdian" width="100%" />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  )
}


export default function WechatScreen() {
  return (
    <div>
      <Navigation />
      <First />
      <Intro />
      <Center />
      <Reason />
      <Show />
      <Footer />
    </div>
  )
}
