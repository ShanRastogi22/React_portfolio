import React from 'react'
import './Header.css'
import Cta from './Cta'
import me from './me.png'
import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Shantanu Rastogi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={me} alt="img" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
