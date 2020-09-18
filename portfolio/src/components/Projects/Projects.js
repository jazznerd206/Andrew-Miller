import React, { useState } from 'react';
import './style.css'
import StudyBuddy from '../../public/images/SBProjPic.PNG';
import GreenLogo from '../../public/images/GreenLogo.jpg';
import GreenGrub from '../../public/images/GreenGrub.JPG';


function Projects() {
  
    return (
      <div className="project-wrapper">
        <img src={StudyBuddy}/>
        <img src={GreenLogo}/>
        <img src={GreenGrub}/>
      </div>      
    );
  }
  
//   render(<TabContainer />);

export default Projects;