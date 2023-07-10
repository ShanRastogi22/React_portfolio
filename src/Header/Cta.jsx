import React from 'react'
import CV1 from './CV1.pdf'

const Cta = () => {
  return (
    <div className="cta">
        <a href={CV1} download className='btn' target={'_blank'}>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta
