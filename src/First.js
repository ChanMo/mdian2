import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import { Box } from '@material-ui/core'

export default function First() {
  const xs = useMediaQuery('(max-width:600px)')
  let cover = <img src={require("./images/bg1.png")} alt="mdian" />
  if (xs) {
    cover = <img src={require("./images/bg1_xs.png")} alt="mdian" />
  }

  return <Box textAlign="center">{cover}</Box>
}
