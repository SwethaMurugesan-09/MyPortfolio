import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';
import resume from '../../assets/resume.pdf'; 

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <div>
        <img src={profile} alt="Profile" />
      </div>
      <div>
        <h1><span>I'm Swetha,</span> Full stack developer from India.</h1>
        <p>I am a passionate full-stack developer with a strong curiosity for emerging technologies. I thrive on learning and exploring the latest advancements in the field. My goal is to create end-to-end solutions that address real-world challenges effectively.</p>
        <div className="hero-action">
            <div className="hero-resume">
                <a href={resume} target="_blank" rel="noopener noreferrer">My resume</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
