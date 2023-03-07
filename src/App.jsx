import React from 'react'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import About from './about/About'
import Expeirienc from './Expeirience/Expeirience'
import Services from './Services/Services'
import Portfolio from './portfolio/Portfolio'
import Testimonials from './Testimonials/Testimonials'
import Contact from './contact/Contact'
import Footer from './Footer/Footer' 

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expeirienc />
      <Services />
      <Portfolio /> 
      <Testimonials />
      <Contact />
      <Footer /> 
    </>
  )
}

export default App
