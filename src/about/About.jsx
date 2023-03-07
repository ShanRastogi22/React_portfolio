import React from 'react'
import './about.css'
import ME from '../img/s1.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about img" />
          </div>
        </div>


        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='abou_icon' />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about_card">
              <FiUsers className='abou_icon' />
              <h5>Clients</h5>
              <small>5 In Lucknow</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='abou_icon' />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quibusdam, quas, totam illo, blanditiis veritatis sint soluta qui laborum iste molestiae tenetur possimus nam dicta non cum nihil ratione consequuntur.</p>
          <a href="#contact" className='btn btn-primary'>Let's talkS</a>


        </div>


      </div>



    </section>
  )
}

export default About
