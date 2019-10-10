import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import bg from './images/bg1.png'
import bg_xs from './images/bg1_xs.png'

export default function First() {
  const xs = useMediaQuery('(max-width:600px)')
  if (xs) {
    return <img src={bg_xs} alt="mdian" width="100%" />
  } else {
    return <img src={bg} alt="mdian" width="100%" />
  }
}
