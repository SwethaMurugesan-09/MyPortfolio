import React from 'react'
import './About.css'

const skills = [
    { name: "Java, C", percentage: 75 },
    { name: "JavaScript", percentage: 55 },
    { name: "ReactJS", percentage: 55 },
    { name: "PowerBI, Figma", percentage: 60 },
    {name: "NodeJs, ExpressJs",percentage:60},
    {name: "MongoDB",percentage:60},
    {name: "MySQL",percentage:60},,
    { name: "GitHub, Postman", percentage: 80 },
    {name: "Cloudinary, Clerk",percentage:50}
];
const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1>Technical Skills & Tools</h1>
        </div>
        <div>
           <div className="about-sections">
                <div className="about-skills">
                {skills.map((skill, index) => (
                        <div className="about-skill" key={index}>
                        <p>{skill.name}</p>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: `${skill.percentage}%` }}></div>
                        </div>
                    </div>
                    
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About