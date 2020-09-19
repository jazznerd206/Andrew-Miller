import React, { useState } from 'react';
import './style.css'
import StudyBuddy from '../../public/images/SBProjPic.PNG';
import GreenLogo from '../../public/images/GreenLogo.jpg';
import GreenGrub from '../../public/images/GreenGrub.JPG';


function Projects() {
  
    return (
      <div className="project-wrapper" id="projects">
        <img src={StudyBuddy} alt="StudyBuddy"/>
        <img src={GreenLogo} alt="Golf"/>
        <img src={GreenGrub} alt="GreenGrub "/>
      </div>      
    );
  }
  
//   render(<TabContainer />);

export default Projects;