import React from 'react'
import Navigation from './Navigation'
import Header from './Header'
import Services from './Services'
import PortfolioGrid from './PortfolioGrid'
import About from './About'
import Team from './Team'
import Clients from './Clients'
import Contact from './Contact'
import Footer from './Footer'

const App = () => (
  <div id="page-top">
    <Navigation />
    <Header />
    <Services />
    <PortfolioGrid />
    <About />
    <Team />
    <Clients />
    <Contact />
    <Footer />
  </div>
)

export default App
