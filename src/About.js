import React from 'react'
import {Box, Container, Grid} from '@material-ui/core'
import Subtitle from './Subtitle'
import styled from 'styled-components'
import Dian from './Dian'

const Slogan = () => <Box component="p" lineHeight={1.6} fontSize={16} fontWeight={800} color="rgba(79, 144, 216, 1)">济南漫点信息技术有限公司<br />——专注于创业,创新型互联网产品研发</Box>

const Description = () => <Box component="p" lineHeight={1.6} fontSize={14} fontWeight={500} color="rgba(32, 56, 88, 1)">专业,独特的产品设计理论, 完全定制化研发, 高效的开发流程, 助您迈出创业第一步. 不止是写代码, 我们替您梳理产品需求, 确定产品功能, 制定产品设计方案, 规划升级， 曾帮客户打造多款精品应用，获得千万级项目融资，区块链合约项目单日最高盈利70万。</Box>

const data = [
  [require('./images/douyin.png'), '抖音小程序'],
  [require('./images/app.png'), 'APP定制'],
  [require('./images/wechat.png'), '微信小程序'],
  [require('./images/pc.png'), 'PC/移动端'],
  [require('./images/design.png'), 'UI设计'],
  [require('./images/logo_design.png'), 'logo设计'],
]

const Title = styled.h4`
  color: rgba(32, 56, 88, 1);
  font-weight: 800;
  letter-spacing: 5px;
  font-size: 1.25rem;
  & > small {
    color: rgba(32, 56, 88, 0.5);
  }
`

export default function About() {
  return (
    <Box py={10}>
    <Container maxWidth="lg">
      <Subtitle text="业务范围" second="BUSINESS SCOPE" />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Title>关于漫点<br /><small>ABOUT MANDIAN</small></Title>
          <Slogan />
          <Description />
          <Dian />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={4}>
            <Grid container alignItems="center">
              {data.map((item,index) => (
              <Grid item xs={4} key={index}>
                <Box textAlign="center" color="rgba(51, 51, 51, 1)" fontSize={16}>
                  <img src={item[0]} alt={item[1]} width="64" height="64" />
                  <p>{item[1]}</p>
                </Box>
              </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Box>
  )
}
