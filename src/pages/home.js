import React from 'react'

import {Box} from '@material-ui/core'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

import Service from '../Service'
import Advantage from '../Advantage'
import Cooperation from '../Cooperation'
import About from '../About'

const Home = () => (
  <div>
    <Navigation />
    <Box textAlign='center'>
      <img src={require("../images/bg1.png")} alt="mdian" />
    </Box>
    <About />
    <Service />
    <Advantage />
    <Cooperation />
    <Footer />
  </div>
)

export default Home
