import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import menuopen from '../assets/menuopen.svg'; 
import menuclose from '../assets/menuclose.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <div className='nav'>
        <h3>SWETHA</h3>
        </div>
        <img src={menuopen} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menuclose} onClick={closeMenu} alt="Close Menu" className='nav-mob-close' />
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
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' href="#contact">Connect with me</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
