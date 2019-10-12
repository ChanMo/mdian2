import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Box, Hidden, Container } from '@material-ui/core'

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  box-sizing: border-box;
`

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  & > li {
    display: inline-block;
  }
  & > li > a {
  display: inline-block;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    font-size: 0.85rem;
    color: ${props => props.light ? "white" : "rgba(32, 56, 88, 1)"};
    &:hover, &:active {
      font-weight: 800;
    }
  }
`

export default function Navigation({light}) {
  return (
    <Box>
      <Container>
        <Inner>
        <Link to="/">
          {light ? <img src={require("./images/logo_light.png")} alt="logo" height={32} /> : <img src={require("./images/logo.png")} alt="logo" height={32} />}

        </Link>
          <Hidden xsDown>
        <Menu light={light}>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/douyin">抖音小程序</Link></li>
          <li><Link to="/wechat">微信小程序</Link></li>
          {/*<li><Link to="/cfss">会议支持系统</Link></li>*/}
          <li><Link to="/app">APP定制</Link></li>
          <li><Link to="/cooperation">渠道合作</Link></li>
          <li><Link to="/free">免费建站</Link></li>
        </Menu>
          </Hidden>
        </Inner>
      </Container>
    </Box>
  )
}
