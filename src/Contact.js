import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'

const Wrap = styled(Box)`
  #contact-box {
    display: none;
  }
  :hover {
    #contact-box {
      display: block;
    }
  }
`

export default function Contace() {
  return (
    <Wrap position="fixed" bottom={60} right={10} zIndex="tooltip">
      <Box boxShadow={2} bgcolor="white" color="rgba(87, 103, 126, 1)" fontWeight={800} borderRadius={8} overflow="hidden">
        <Box bgcolor="rgba(0, 121, 255, 1)" px={2} py={1.5}>
          <img src={require("./images/icon_contact.png")} height="24" alt="mdian" />
        </Box>
        <Box p={2} textAlign="center">联<br/>系<br/>我<br/>们</Box>
      </Box>
      <Box id="contact-box" boxShadow={4} py={3} px={4} bgcolor="white" borderRadius={8} position="absolute" right={80} bottom={0} color="rgba(32, 56, 88, 1)">
        <img src={require("./images/qrcode2.png")} alt="mdian" />
        <Box whiteSpace="nowrap" textAlign="center" mb={4}>微信官方客服</Box>
        <Box whiteSpace="nowrap" mb={1}>QQ: 786662147</Box>
        <Box whiteSpace="nowrap">电话: 13145312751</Box>
      </Box>
    </Wrap>
  )
}
