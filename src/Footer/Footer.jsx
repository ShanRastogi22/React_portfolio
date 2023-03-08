import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>$H@N DEVELOPERS</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expeirience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a herf="https://www.facebook.com/shan.rastogi.3" target={'_blank'}><BsFacebook /></a>
        <a herf="https://www.instagram.com/rastogishan/"  target={'_blank'}><BsInstagram /></a>
        <a herf="https://www.linkedin.com/in/shantanu-rastogi-837668258/" target={'_blank'}><BsLinkedin /></a>
      </div>
      <div className="footer_coypright">
        <small>&copy; $H@N DEVELOPERS. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
