import React from 'react';
import './Mywork.css';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; 
import mywork_data from '../../assets/mywork_data';

const Mywork = () => {
  return (
    <div id="work" className="mywork">
        <div className="mywork-title">
            <h1>My Projects</h1>
        </div>
        <div className='mywork-container'>
          {mywork_data.map((work, index) => (
            <div key={index} className="mywork-item">
              <img src={work.w_img} alt={work.w_name} />
              <div className="overlay">
                <h2>{work.w_name}</h2>
                <p>{work.desc}</p>
                <div className="work-links">
                  <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="work-link">
                    <FaGithub />
                  </a>
                  <a href={work.w_link1} target="_blank" rel="noopener noreferrer" className="work-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Mywork;
