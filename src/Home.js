import React from 'react'

import Navigation from './Navigation'
import First from './First'
import Service from './Service'
import Advantage from './Advantage'
import Cooperation from './Cooperation'
import About from './About'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Navigation />
      <First />
      <About />
      <Service />
      <Advantage />
      <Cooperation />
      <Footer />
    </div>
  )
}
