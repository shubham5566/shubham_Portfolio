import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineDribbbleSquare } from 'react-icons/ai'
const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        
    <a href="https://www.linkedin.com/in/shubham-bhavsar-2b3241183/"  target='_blank'><BsLinkedin/></a>
    <a href="https://github.com/shubham5566"  target='_blank'> <BsGithub/></a>
    <a href="https://dribbble.com"  target='_blank'><AiOutlineDribbbleSquare/></a>
        
        
        </div>
  )
}

export default HeaderSocial