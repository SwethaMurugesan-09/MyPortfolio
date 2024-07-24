import React from 'react';
import './Mywork.css';
import mywork_data from '../../assets/mywork_data';

const Mywork = () => {
  return (
    <div id="work" className="mywork">
        <div className="mywork-title">
            <h1>My Projects</h1>
        </div>
        <div className='mywork-container'>
          {mywork_data.map((work, index) => (
            <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer" className="mywork-item">
              <img src={work.w_img} alt={`work-${index}`} />
              <span className="project-name">{work.w_name}</span>
            </a>
          ))}
        </div>
    </div>
  );
}

export default Mywork;
