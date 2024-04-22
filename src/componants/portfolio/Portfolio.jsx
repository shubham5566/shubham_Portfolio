import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const data = [
  {
    
    id: 1,
    image:IMG1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    demo: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    
    id: 2,
    image:IMG2,
    title: "qui est esse",
    demo: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    
    id: 3,
    image:IMG3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    demo: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    
    id: 4,
    image:IMG4,
    title: "eum et est occaecati",
    demo: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    
    id: 5,
    image:IMG5,
    title: "nesciunt quas odio",
    demo: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    
    id: 6,
    image:IMG6,
    title: "dolorem eum magni eos aperiam quia",
    demo: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  }
]
const Portfolio = () => {
  return (
    <section id='protfolio'>
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
       {
        data.map( (item)=>{
          return (
          <article key={item.id} className='portfolio_item'>
          <div className="portfolio_item_image">
            <img  src={item.image} alt=''/>
          </div>
          <h3 > {item.title}</h3>
          <div className="portfolio_item_cta">
            <a   href={item.id}className='btn'>Github</a>
          <a  href={item.demo} className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        );
          
        })
       }
      </div>
    
    </section>
  )
}

export default Portfolio


{/* <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt=''/>
          </div>
          <h3> This is portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a href=""className='btn'>GitHub</a>
          <a href=""className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt=''/>
          </div>
          <h3> This is portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a href=""className='btn'>GitHub</a>
          <a href=""className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt=''/>
          </div>
          <h3> This is portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a href=""className='btn'>GitHub</a>
          <a href=""className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt=''/>
          </div>
          <h3> This is portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a href=""className='btn'>GitHub</a>
          <a href=""className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt=''/>
          </div>
          <h3> This is portfolio item title</h3>
          <div className="portfolio_item_cta">
            <a href=""className='btn'>GitHub</a>
          <a href=""className='btn btn-primary'>Live Demo</a>
          </div>
        </article> */}