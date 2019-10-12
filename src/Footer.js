import React from 'react'
import styled from 'styled-components'
import { Box, Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import qrcode from './images/qrcode.png'

const Text = styled.p`
  font-size: 0.85rem;
  color: ${props => props.light ?  "rgba(255,255,255,1)" : "rgba(32, 56, 88, 1)"};
  text-align: ${props => props.center ? "center": "left"};
  & > a {
    color: ${props => props.light ?  "rgba(255,255,255,1)" : "rgba(32, 56, 88, 1)"};
  }
`

export default function Footer({light}) {
  return (
    <Box pt={4} borderTop={1} borderColor={light ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.12)"}>
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Grid item xs={12} sm={4}>
          <Box p={2}>
          <Box component="h3" color={light ? "white": "rgba(32, 56, 88, 1)"} fontWeight={800}>联系我们</Box>
          <Text light={light}>电话: 13145312751</Text>
          <Text light={light}>邮箱: mandiankeji@163.com</Text>
          <Text light={light}>微信: mandian1927</Text>
          <Text light={light}>地址: 济南市高新区盛景广场A座1606</Text>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={2}>
            <Box component="h3" color={light ? "white": "rgba(32, 56, 88, 1)"} fontWeight={800}>案例展示</Box>
            <Text light={light}><Link to="/">抖音小程序</Link></Text>
            <Text light={light}><Link to="/">微信小程序</Link></Text>
            <Text light={light}><Link to="/">Android/IOS案例</Link></Text>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box p={2}>
          <Box component="img" mt={2} width={120} src={qrcode} alt="qrcode" />
          <Box component="p" fontSize={16} color={light ? "white" : "rgba(32, 56, 88, 1)"}>扫码咨询客服</Box>
          </Box>
        </Grid>
        </Grid>
          <Box
            my={2}
            fontSize={14}
            textAlign="center"
            color={light ? "rgba(255,255,255,0.6)" : "rgba(32, 56, 88, 0.6)"}>Copy Right © 济南漫点信息科技有限公司版权所有 鲁ICP备19017316号</Box>
      </Container>
      </Box>
  )
}
