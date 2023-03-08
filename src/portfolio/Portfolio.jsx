import React from 'react';
import './portfolio.css'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'

const data = [
  {
    id: 1,
    image: img1,
    title: 'The first Protfolio page',
    github: 'https://github.com/ShanRastogi22?tab=repositories',
    demo: 'https://shanfolio.netlify.app/'
  },
  {
    id: 2,
    image: img2,
    title: 'The first Protfolio site',
    github: 'https://github.com/ShanRastogi22?tab=repositories',
    demo: 'https://shanfolio.netlify.app/portfolio.html'
  },
  {
    id: 3,
    image: img3,
    title: 'This site',
    github: 'https://github.com/ShanRastogi22?tab=repositories',
    demo: ''
  },
  {
    id: 4,
    image: img4,
    title: 'The first Parctice page',
    github: 'https://github.com/ShanRastogi22?tab=repositories',
    demo: 'https://shanproject2.netlify.app/'
  },
  {
    id: 5,
    image: img5,
    title: 'The ToDO list',
    github: 'https://github.com/ShanRastogi22?tab=repositories',
    demo: 'https://shanproject3.netlify.app/'
  },
]




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className='porfolio_item'>
                <div className="portfoli_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn' target={'_blank'}>Github</a>
                  <a href={demo} className='btn' target={'_blank'}>Live Demo</a>
                </div>

              </article>

            )
          })
        }

      </div>





    </section>
  );
}

export default Portfolio;
