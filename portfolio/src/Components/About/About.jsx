import React from 'react'
import './About.css'
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>
        <div>
           <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a fullstack developer with the passion of creating an end to end solution for real time problems.
                    I always try to find the optimal and efficient solution for the problems.</p>
                </div>
                <div className="about-skills">
                    <h2>Languages:</h2>
                    <div className="about-skill">
                        <p>Html &css</p>
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p>
                    </div>
                    <div className="about-skill">
                        <p>React JS,Node & Express</p>
                    </div>
                    <div className="about-skill">
                        <p>Python</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About