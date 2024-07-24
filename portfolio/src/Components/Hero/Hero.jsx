import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';
import resume from '../../assets/resume.pdf'; // Import your resume PDF
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile} alt="Profile" />
        <h1><span>I'm Swetha,</span> Full stack developer from India.</h1>
        <p>I am a full stack developer from Tamilnadu, India. </p>
        <div className="hero-action">
            <div className="hero-connect">
                <AnchorLink className='anchor-link' href="#contact">Connect with me</AnchorLink>
            </div>
            <div className="hero-resume">
                <a href={resume} target="_blank" rel="noopener noreferrer">My resume</a>
            </div>
        </div>
    </div>
  );
}

export default Hero;
