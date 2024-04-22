import React from 'react'
import './experiance.css'
import {AiFillCheckCircle} from "react-icons/ai"
const experiance = () => {
  return (
    <section id='experiance'>

<h5>  WHAT Skills I have </h5>
<h2> My Experiance</h2>
<div className="container experiance_container">

  {/* frontend starts */}
  <div className="experiance_frontend">
    <h3>Frontend Devoloper</h3>
    <div className="experiance_content">
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Experiance</small>
        </div>
        
         </article>
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
       <div>
       <h4>Teilwind Css</h4>
        <small className='text-light'>Experiance</small>
       </div>
        
         </article>
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
       <div>
       <h4>CSS</h4>
        <small className='text-light'>Experiance</small>
       </div>
        
         </article>
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
       <div>
       <h4>JavaScript</h4>
        <small className='text-light'>Experiance</small>
       </div>
        
         </article>
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
        <div>
        <h4>SCSS</h4>
        <small className='text-light'>Experiance</small>
        </div>
        
         </article>
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
        <div>
        <h4>MUI</h4>
        <small className='text-light'>Experiance</small>
        </div>
        
         </article>
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
        <div>
        <h4>React-Bootstrap</h4>
        <small className='text-light'>Experiance</small>
        </div>
        
         </article>
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
       <div>
       <h4>React.Js</h4>
        <small className='text-light'>Experiance</small>
        
       </div>
         </article>
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
       <div>
       <h4>GSAP</h4>
        <small className='text-light'>Experiance</small>
        
       </div>
         </article>

    </div>
  </div>
  {/* frontend  end */}
  {/* backend start */}
  <div className="experiance_backend">
  <h3>Backend Development</h3>
    <div className="experiance_content">
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
        <div>
        <h4>Node</h4>
        <small className='text-light'>Experiance</small>
        </div>
        
         </article>
      {/* <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
       <div>
       <h4>HTML</h4>
        <small className='text-light'>Experiance</small>
       </div>
        
         </article> */}
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
       <div>
       <h4>Express</h4>
        <small className='text-light'>Experiance</small>
       </div>
        
         </article>
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
       <div>
       <h4>Mongo DB</h4>
        <small className='text-light'>Experiance</small>
       </div>
        
         </article>
      <article   className='experiance_details'>
        <AiFillCheckCircle className="experiance_details-icon"/>
       <div>
       <h4>SQL</h4>
        <small className='text-light'>Experiance</small>
       </div>
        
         </article>
     
      
        
        

    </div>
  </div>


</div>



    </section >
  )
}

export default experiance