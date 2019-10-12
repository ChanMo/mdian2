import React from 'react'
import { Box } from '@material-ui/core'

export default function Call() {
  return (
    <Box display="flex" justifyContent="center" mt={-2}>
    <Box boxShadow={2} display="flex" justifyContent="center" alignItems="center" py={1} px={2} borderRadius={32} bgcolor="white">
      <img src={require("./images/phone.png")} alt="phone" width={32} height={32} />
      <Box ml={2} fontSize={16} fontWeight={800} color="rgba(32, 56, 88, 1)">电话</Box>
      <Box ml={1} fontSize={16} fontWeight={800} color="rgba(32, 56, 88, 1)">13145312751</Box>
      <Box ml={4} mr={2} fontSize={18} fontWeight={800} color="rgba(32, 56, 88, 1)">免费APP评估</Box>
    </Box>
    </Box>
  )
}


