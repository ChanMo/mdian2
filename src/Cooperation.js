import React from 'react'
import styled from 'styled-components'
import { Box, Container, Grid } from '@material-ui/core'
import Subtitle from './Subtitle'

const data = [
  require('./images/sdca.png'),
  require('./images/very.png'),
  require('./images/inspur.png'),
  require('./images/wine.png'),
  require('./images/jkone.png'),
  require('./images/mashi.png'),
  require('./images/teambition.png'),
  require('./images/dazhong.png'),
]

const Item = styled(Grid)`
  padding: 1rem;
`

export default function Cooperation() {
  return (
    <Box py={10}>
    <Container maxWidth="lg">
      <Subtitle text='合作伙伴' second='COOPERATION' />
      <Box boxShadow={3} my={8} bgcolor="rgba(242, 242, 242, 1)">
      <Grid container spacing={2}>
        {data.map((item,index) => (
          <Item item sm={3} xs={6} key={index}>
            <Box textAlign="center">
            <Box component="img" height={100} width="auto" src={item} alt={index} />
            </Box>
          </Item>
        ))}
      </Grid>
      </Box>
    </Container>
    </Box>
  )
}
