import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import StudyBuddy from '../../public/images/SBProjPic.PNG';
import GreenLogo from '../../public/images/GreenLogo.jpg';
import GreenGrub from '../../public/images/GreenGrub.JPG';
import { Tabs, Tab } from 'react-bootstrap';


function Projects() {
    const [key, setKey] = useState('fullStack');
  
    return (
      <div className="project-wrapper" id="projects">
        <Tabs 
          className="project-tabs"
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="fullStack" title="Full Stack">
            <div className="image-wrapper">
              <img src={StudyBuddy} alt="StudyBuddy"/>
            </div>
          </Tab>
          <Tab eventKey="frontEnd" title="Front End">
            <div className="image-wrapper">
              <img src={GreenLogo} alt="Golf"/>
            </div>
          </Tab>
          <Tab eventKey="backEnd" title="Back End">
            <div className="image-wrapper">
              <img src={GreenGrub} alt="GreenGrub "/>
            </div>
          </Tab>
        </Tabs>
      </div>    
    );
  }

export default Projects;