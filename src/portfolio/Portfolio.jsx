import React from 'react';
import './portfolio.css'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import img7 from '../img/img7.jpeg'
import img8 from '../img/img8.png'
import img9 from '../img/img9.png'
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
  {
    id: 6,
    image: img6,
    title: 'Tic_Tac_Toe',
    github: 'https://github.com/ShanRastogi22/tic_tak_toe',
    demo: 'https://tictactot.netlify.app/'
  },
  {
    id: 7,
    image: img7,
    title: 'Quota App',
    github: 'https://github.com/ShanRastogi22/Quote_app ',
    demo: 'https://1quoteapp.netlify.app/'
  },
  {
    id: 8,
    image: img8,
    title: 'Contact Form',
    github: 'https://github.com/ShanRastogi22/Firebase_database-form',
    demo: 'https://fir-contact-bd86a.web.app/'
  },
  {
    id: 9,
    image: img9,
    title: 'Ani Chate',
    github: 'https://github.com/ShanRastogi22?tab=repositories',
    demo: 'https://anichate.netlify.app/'
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
