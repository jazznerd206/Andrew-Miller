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
        <h1>PROJECTS</h1>
        <Tabs 
          className="project-tabs"
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="fullStack" title="Full Stack">
            <div className="tab-wrapper">
              <div className="project-card studyBuddy">
                <div className="card-title">
                  <h3>StudyBuddy</h3>
                  <p>Meet, study, learn.</p>
                </div> 
                <div className="button">
                  Vist Site
                </div>
                <div className="button">
                  View Code
                </div>
              </div>
              <div className="project-card greenGrub">
                <div className="card-title">
                  <h3>Green Grub</h3>
                  <p>Plan your next meal.</p>
                </div> 
                <div className="button">
                  Vist Site
                </div>
                <div className="button">
                  View Code
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="frontEnd" title="Front End">
            <div className="tab-wrapper">
              <div className="project-card studyBuddy">
                <div className="card-title">
                  <h3>StudyBuddy</h3>
                  <p>Meet, study, learn.</p>
                </div> 
                <div className="button">
                  Vist Site
                </div>
                <div className="button">
                  View Code
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="backEnd" title="Back End">
            <div className="tab-wrapper">
              <div className="project-card greenGrub">
                <div className="card-title">
                  <h3>Green Grub</h3>
                  <p>Plan your next meal.</p>
                </div> 
                <div className="button">
                  Vist Site
                </div>
                <div className="button">
                  View Code
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>    
    );
  }

export default Projects;