import React from 'react'
import './about.css'
import ME from "../../assets/shubham_new-removebg-preview.png"
import{FaAward} from "react-icons/fa"
import{FiUsers} from "react-icons/fi"
import{AiFillFolder} from "react-icons/ai"
import { ABOUT_ME } from '../../data'
// import { Button } from 'react-bootstrap'

const About = () => {
  return (
    <section id='about' >
      
      <h5>Get TO Know</h5>
      <h2>{ABOUT_ME}</h2>
      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me-image">
            <img src= {ME} alt='About Image'/>
          </div>

        </div>
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward/>
            <h5>Experiance</h5>
            <small>3+ years Working </small>
          </article>
          <article className='about_card'>
            <FiUsers/>
            <h5>Client</h5>
            <small> 200 worldwide </small>
          </article>
          <article className='about_card'>
            <AiFillFolder/>
            <h5>Projects</h5>
            <small>80+ completed </small>
          </article>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusamus tempore adipisci vel mollitia soluta officia, quibusdam libero vero veniam laudantium culpa dolor. Fuga iure quo eos? Quaerat, facere temporibus!</p>
           {/* <Button variant="primary">button</Button> */}
           <a href='#contact' className='btn btn-primary'>Lets Talk</a>


      </div>
      
      </div>
      </section>
  )
}

export default About