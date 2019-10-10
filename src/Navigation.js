import React from 'react'
import logo from './images/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Hidden, Container } from '@material-ui/core'

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
    color: rgba(32, 56, 88, 1);
    &:hover, &:active {
      color: rgba(32, 56, 88, 1);
      font-weight: 800;
    }
  }
`

const Logo = styled.img`
  height: 32px;
`

export default function Navigation() {
  return (
    <div>
      <Container>
        <Inner>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
          <Hidden xsDown>
        <Menu>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/">抖音小程序</Link></li>
          <li><Link to="/">微信小程序</Link></li>
          <li><Link to="/">会议支持系统</Link></li>
          <li><Link to="/">APP定制</Link></li>
          <li><Link to="/">渠道合作</Link></li>
          <li><Link to="/">免费建站</Link></li>
        </Menu>
          </Hidden>
        </Inner>
      </Container>
    </div>
  )
}
