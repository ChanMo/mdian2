import React from 'react'
import styled from 'styled-components'
import { Box, Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import qrcode from './images/qrcode.png'

const Title = styled.h4`
  font-weight: 800;
  margin: 1.5rem 0;
  color: rgba(32, 56, 88, 1);
`

const Text = styled.p`
  font-size: 0.85rem;
  color: rgba(32, 56, 88, 1);
  text-align: ${props => props.center ? "center": "left"};
  & > a {
    color: rgba(32, 56, 88, 1);
  }
`

export default function Footer() {
  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Grid item xs={12} sm={4}>
          <Title>联系我们</Title>
          <Text>电话: 13145312751</Text>
          <Text>邮箱: mandiankeji@163.com</Text>
          <Text>微信: mandian1927</Text>
          <Text>地址: 济南市高新区盛景广场A座1606</Text>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Title>案例展示</Title>
            <Text><Link to="/">抖音小程序</Link></Text>
            <Text><Link to="/">微信小程序</Link></Text>
            <Text><Link to="/">Android/IOS案例</Link></Text>
          </Grid>
        <Grid item xs={12} sm={4}>
          <Box component="img" mt={2} width={120} src={qrcode} alt="qrcode" />
          <Box component="p" fontSize={16} color="rgba(32, 56, 88, 1)">扫码咨询客服</Box>
        </Grid>
        </Grid>
          <Box
            my={2}
            fontSize={14}
            textAlign="center"
            color="rgba(32, 56, 88, 0.6)">Copy Right © 济南漫点信息科技有限公司版权所有 鲁ICP备19017316号</Box>
      </Container>
  )
}
