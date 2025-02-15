import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';
import resume from '../../assets/Swetha Resume.pdf'; 
import { FaGithub,FaHackerrank,FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <div>
        <img src={profile} alt="Profile" />
      </div>
      <div>
        <h1><span>I'm Swetha,</span> Full stack developer from India.</h1>
        <p>A passionate full-stack developer with a strong curiosity for emerging technologies. I thrive on learning and exploring the latest advancements in the field. My goal is to create end-to-end solutions that address real-world challenges effectively.</p>
        <div className='hero-icons-container'>
          <a className='hero-icons-img' href="https://github.com/SwethaMurugesan-09" target='_blank' rel="noopener noreferrer">
              <FaGithub />
          </a>
          <a className='hero-icons-img' href="https://leetcode.com/u/Swetha_Murugesan/" target='_blank' rel="noopener noreferrer">
          <SiLeetcode />
          </a>
          <a className='hero-icons-img' href="https://www.linkedin.com/in/swetha--murugesan/" target='_blank' rel="noopener noreferrer">
              <FaLinkedinIn />
          </a>
          <a className='hero-icons-img' href="https://www.hackerrank.com/profile/swetham_22cse" target='_blank' rel="noopener noreferrer">
              <FaHackerrank />
          </a>
        </div>
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
