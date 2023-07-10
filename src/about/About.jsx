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
          <p>Hardworking Full Stack Web Developer Intern with
experience in varied platform development
frameworks. Focused on problem-solving and
troubleshooting to identify targeted solutions.
Proactive, methodical and quick to learn for reliable
team support. Productive employee with proven
track record of successful project management and
producing quality outcomes through leadership and
team motivation. Works with clients to determine
requirements and provide excellent service.</p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>


        </div>


      </div>



    </section>
  )
}

export default About
