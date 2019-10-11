import React from 'react'
import Subtitle from './Subtitle'
import {Box, Container, Grid} from '@material-ui/core'

const data = [
  ['01', '专业', '让您的想法真正变成产品'],
  ['02', '前沿', '及时掌握新兴行业动态'],
  ['03', '高效', '令时间更有价值'],
  ['04', '安全', '更稳定的技术']
]

export default function Advantage() {
  return (
    <Box py={10}>
      <Container maxWidth="lg">
      <Subtitle text='我们的优势' second='ADVANTAGE' />
      <Box pt={4}>
      <Grid container>
        {data.map(item => (
          <Grid key={item[0]} item sm={3} xs={12}>
            <Box pb={2} display="flex" alignItems="center">
              <Box mr={2} fontSize={48} fontWeight={600} color="rgba(55, 92, 161, 1)">{item[0]}</Box>
              <div>
                <Box fontWeight={800} color="rgba(51, 51, 51, 1)">{item[1]}</Box>
                <Box fontSize={14} color="rgba(0, 0, 0, 1)">{item[2]}</Box>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Box>
      </Container>
    </Box>
  )
}
