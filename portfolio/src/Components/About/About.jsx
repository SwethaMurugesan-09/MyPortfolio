import React from 'react'
import './About.css'
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1>Technical Skills & Tools</h1>
        </div>
        <div>
           <div className="about-sections">
                <div className="about-skills">
                    <div className="about-skill">
                        <p>Programming Language: Java</p>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p>
                    </div>
                    
                    <div className="about-skill">
                        <p>PowerBI, Figma</p>
                    </div>
                    <div className="about-skill">
                        <p>Github</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About