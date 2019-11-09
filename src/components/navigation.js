import React, { useState } from 'react'
import { Link as BaseLink } from 'react-router-dom'
import { Menu, MenuItem, Button, AppBar, Box, Hidden, Container } from '@material-ui/core'
import * as Icon from 'react-feather'
import styled from 'styled-components'

const Wrap = styled(AppBar)`
  background-color: white !important;
  box-shadow: none !important;
`

const Inner = styled(Container)`
  height: 3.5rem;
  line-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const Link = styled(BaseLink)`
  position: relative;
  display: inline-block;
  color: #203858;
  margin-left: 1.8rem;
  font-size: 0.85rem;
  text-decoration: none;
  &:after {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    content: '';
    width: 50%;
    height: 3px;
    border-radius: 3px;
    background-color: transparent;
  }
  &:hover {
    color: #192c46;
    &:after {
      background-color:#061427;
    }
  }
`

const Logo = () => <img src={require('../images/logo.png')} alt='mdian' height={32} />

const menudata = [
  ['首页', '/'],
  ['抖音', '/douyin'],
  ['APP定制', '/app'],
  ['渠道合作', '/cooperation'],
  ['免费建站', '/free']
]
const HorizontalMenuBox = () => {
  return (
  <List>
    {menudata.map((item,index) => (
      <Box key={index} component='li' display='inline-block'>
        <Link to={item[1]}>{item[0]}</Link>
      </Box>
    )) }
  </List>
  )
}

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(false)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Wrap position='fixed' color='default'>
      <Inner maxWidth='lg'>
        <Logo />
        <Hidden mdDown>
          <HorizontalMenuBox />
        </Hidden>
        <Hidden mdUp>
          <Button
            aria-controls='vertical-menu'
            aria-haspopup='true'
            onClick={handleMenu}>
            <Icon.Menu />
          </Button>
          <Menu
            id='vertical-menu'
            anchorEl={anchorEl}
            keepMounted
            open={open}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClose={handleClose}>
            {menudata.map((item,index) => (
              <MenuItem key={index} component={BaseLink} to={item[1]}>{item[0]}</MenuItem>
            ))}
          </Menu>
        </Hidden>
      </Inner>
    </Wrap>
  )
}

export default Navigation
