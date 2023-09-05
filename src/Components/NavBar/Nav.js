import React from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/Nletter.png'
import './Nav.css'
const Nav = () => {
  return (
    <nav className="navbar">
      <img src={logo} className='logo' />
      <div className="menu">
        <Link to='home' activeClass="active" offset={-390} smooth={true} duration={1500} className='MenuList'>Home</Link>
        <Link to='about' activeClass="active" offset={-300} smooth={true} duration={1500} className='MenuList'>About</Link>
        <Link to='skillstech' activeClass="active" offset={-300} smooth={true} duration={1500} className='MenuList'>Skills</Link>
        <Link to='projectsec' activeClass="active" offset={-300} smooth={true} duration={1500} className='MenuList'>Project</Link>

      </div>
      <Link to='contact' activeClass="active" smooth={true} duration={1500}>
        <button className='contactbtn'>
          <img src='https://img.icons8.com/material-outlined/24/filled-speech-bubble-with-dots.png' className='contacticon' /> Contact here
        </button>
      </Link>
    </nav>
  )
}

export default Nav