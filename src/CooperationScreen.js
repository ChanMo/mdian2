import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import First from './First'
import Subtitle from './Subtitle'
import { Grid, Container, Box } from '@material-ui/core'
import styled from 'styled-components'

function Call() {
  return (
    <Box display="flex" justifyContent="center" mt={-2}>
    <Box boxShadow={2} display="flex" justifyContent="center" alignItems="center" py={1} px={2} borderRadius={32} bgcolor="white">
      <img src={require("./images/phone.png")} alt="phone" width={32} height={32} />
      <Box fontSize={16} fontWeight={800} color="rgba(32, 56, 88, 1)">&nbsp;&nbsp;电话&nbsp;15550001234&nbsp;&nbsp;免费APP评估</Box>
    </Box>
    </Box>
  )
}

const data = [
  ['正规公司','具有合法营业执照和独立法人代表，有良好的商业信誉和口碑'],
  ['具有销售团队', '具有合法营业执照和独立法人代表，有良好的商业信誉和口碑'],
  ['具有客户资源', '具有合法营业执照和独立法人代表，有良好的商业信誉和口碑']
]

function AdvantageItems() {
  return (
    <Grid container spacing={8}>
      {data.map((item,index) => (
      <Grid key={index} item xs={12} sm={4}>
        <Box borderBottom={4} p={4} borderColor="rgba(32, 56, 88, 1)" bgcolor="rgba(245, 247, 250, 1)" borderRadius={8} textAlign="center" mb={1}>
          <Box component="h4" fontWeight={800}>{item[0]}</Box>
          <Box component="p" fontSize={14}>{item[1]}</Box>
        </Box>
      </Grid>
      ))}
    </Grid>
  )
}

function Advantage() {
  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <Subtitle text="我们的优势" second="ADVANTAGE" />
        <Box textAlign="center" lineHeight={2} fontSize={16} color="rgba(32, 56, 88, 1)" mb={8}>专业,独特的产品设计理论, 完全定制化研发, 高效的开发流程, 助您迈出创业第一步. <br />不止是写代码, 我们替您梳理产品需求, 确定产品功能, 制定产品设计方案, 规划升级， <br />曾帮客户打造多款精品应用，获得千万级项目融资，区块链合约项目单日最高盈利70万。</Box>
        <AdvantageItems />
      </Container>
    </Box>
  )
}

const CenterWrap = styled(Box)`
  background-image: url(${require("./images/bg3.png")});
  background-size: cover;
`
function Center() {
  return (
    <CenterWrap py={10} textAlign="center">
      <Container maxWidth="sm">
        <Subtitle text="移动战略平台" second="PLATFORM" dark={false} />
        <Box component="img" mt={2} src={require("./images/coo_circle.png")} alt="mdian" width="100%" />
      </Container>
    </CenterWrap>
  )
}

function Promise() {
  return (
    <Box py={10}>
      <Container maxWidth="md">
        <Subtitle text="服务与承诺" second="PROMISE" />
        <Box py={4}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box component="h4" color="rgba(55, 92, 161, 1)" fontSize={22} fontWeight={800}>专人专项跟进</Box>
            <Box component="p" color="rgba(32, 56, 88, 1)" fontSize={16} fontWeight={800} lineHeight={3}>渠道经理全程跟踪，给予专业帮助<br />技术团队7*24H监控，保障系统安全<br />客服全年365天，提供优质服务<br /></Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={require("./images/promise.png")} alt="mdian" width={240} />
          </Grid>
        </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default function CooperationScreen() {
  return (
    <div>
      <Navigation />
      <First />
      <Call />
      <Advantage />
      <Center />
      <Promise />
      <Footer />
    </div>
  )
}
