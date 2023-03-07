import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <articale className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Identify Who Will Be Using Your Website or App</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Use Real-World Objects and Constraints</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Make It Easy To Use</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Keep The User In Control</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Stick to Best Practices When You Can</p>
            </li>
          </ul>
        </articale>
        <articale className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>How to create search engine friendly web site?</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>How to secure the source code frequently?</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Will the web site design display well in different browsers?</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Will the navigation menus be easy to use?</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>How easily will the site pages print?</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>How effectively the style sheets be used on your web sites?</p>
            </li>
          </ul>
        </articale>
        <articale className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Creating unique and high quality content consistently.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Promoting and distributing the content to reach the target audience.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Finding great writers with relevant industry expertise.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Coming up the right topic for a post that the audience would like to read.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Impactful content marketing relies on quality and consistent content creation.</p>
            </li>
          </ul>
        </articale>


      </div> 




    </section>
  )
}

export default Services
