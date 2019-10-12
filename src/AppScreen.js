import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import Navigation from './Navigation'
import Subtitle from './Subtitle'
import Footer from './Footer'
import Section from './Section'
import Call from './Call'


function Main() {
  return (
    <Box py={10}>
      <Container maxWidth="md">
        <Subtitle text="企业移动战略部署平台" second="MOBILE STRATEGY" />
        <Box py={4}>
          <Box component="p" fontSize={16} fontWeight={800} color="rgba(32, 56, 88, 1)" lineHeight={2}>强大的技术能力助您业务落地呈现<br />漫点科技技术平台已经服务过众多家大中小型企业和创业团队<br />我们足够了解各行业的移动商业模式，以支持您的移动战略部署<br /></Box>
          <img src={require("./images/app_main.png")} alt="app" />
        </Box>
      </Container>
    </Box>
  )
}

function Kanban() {
  return (
    <Section img={require("./images/bg4.png")}>
      <Container maxWidth="md">
        <Subtitle text="敏捷开发-全程参与" second="DEVELOPMENT" dark={false} />
        <Box py={4} color="white">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box component="h4" fontSize={22} fontWeight={800}>专业团队确保做到所想即所得</Box>
              <Box component="p" fontSize={16} lineHeight={2}>全程参与项目开发，<br />实时查看开发进度，省心、放心、安心</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={require("./images/app_kanban.png")} alt="kanban" />
            </Grid>
            <Grid item xs={12}>
              <Box component="img" mt={4} src={require("./images/app3.png")} alt="workthrough" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Section>
  )
}

function Reason() {
  return (
    <Section>
      <Container maxWidth="md">
        <Subtitle text="为什么选择我们" second="REASON" />
        <Box py={6}>
          <img src={require("./images/app4.png")} alt="reason" width="100%" />
        </Box>
      </Container>
    </Section>
  )
}

function Show() {
  const data = [
    require("./images/case_ca.png"),
    require("./images/case_jkone.png"),
    require("./images/case_xysale.png"),
    require("./images/case_fruit.png"),
    require("./images/case_uzu.png"),
    require("./images/case_huo.png"),
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

export default function AppScreen() {
  return (
    <div>
      <Navigation />
      <img src={require("./images/banner_app.png")} alt="app" width="100%" />
      <Call />
      <Main />
      <Kanban />
      <Reason />
      <Show />
      <Footer />
    </div>
  )
}
