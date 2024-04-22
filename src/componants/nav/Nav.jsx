import React from 'react'
import './nav.css'
import{AiTwotoneHome} from 'react-icons/ai'
import{AiOutlineUserAdd} from 'react-icons/ai'
import{BsJournalBookmarkFill} from 'react-icons/bs'
import{RiCustomerService2Fill} from 'react-icons/ri'
import{BsMessenger} from 'react-icons/bs'
import{useState} from 'react'
const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={ () => setActiveNav('#')} className={activeNav ==='#' ? 'active':''}><AiTwotoneHome /> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active':''}><AiOutlineUserAdd/> </a>
      <a href='#experiance' onClick={() => setActiveNav('#experiance')}  className={activeNav ==='#experiance' ? 'active':''}><BsJournalBookmarkFill/> </a>
      <a href='#services' onClick={() => setActiveNav('#services')}  className={activeNav ==='#services' ? 'active':''}><RiCustomerService2Fill/> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}  className={activeNav ==='#contact' ? 'active':''}><BsMessenger/> </a>
    </nav>
  )
}

export default Nav