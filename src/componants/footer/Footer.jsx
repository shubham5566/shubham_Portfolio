import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer id='footer'>
     
      <a href="#" className='footer_logo'>SHUBZZ</a>
      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experiance</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">portfolio</a></li>
        {/* <li><a href="#">testmonial</a></li> */}
        <li><a href="#">Contact</a></li>
       
      </ul>
      <div className="footer_socials">
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Shubham Bhavsar</small>
      </div>

    </footer>
  )
}

export default Footer