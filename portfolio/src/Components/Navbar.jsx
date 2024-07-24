import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
// import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div className="navbar">
      <div className='nav'>
        <h3>SWETHA</h3>
      </div>
      <ul className='nav-menu'>
        <li>
          <AnchorLink className='anchor-link' href="#home">
            <p onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href="#about">
            <p onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href="#services">
            <p onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href="#work">
            <p onClick={() => setMenu("work")} className={menu === "work" ? "active" : ""}>Work</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href="#contact">
            <p onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' href="#contact">Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
