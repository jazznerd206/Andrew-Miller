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
            <div className="project-card rareBirdSociety">
                <div className="card-title">
                  <h3>#RareBirdSociety</h3>
                  <p>Golf mental game skill builder</p>
                </div> 
                <div className="button">
                  <a href="https://birdiehunter.herokuapp.com/" target="_blank" rel="noopener noreferrer">Vist Site</a>
                </div>
                <div className="button">
                  <a href="https://github.com/jazznerd206/Golf_App" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
              <div className="project-card newsScraper">
                <div className="card-title">
                  <h3>World News Scraper</h3>
                  <p>NYT News and Database</p>
                </div> 
                <div className="button">
                  <a href="https://still-cove-06577.herokuapp.com/" target="_blank" rel="noopener noreferrer">Vist Site</a>
                </div>
                <div className="button">
                  <a href="https://github.com/jazznerd206/nyt-scraper" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
              <div className="project-card googleBooks">
                <div className="card-title">
                  <h3>Book your own adventure.</h3>
                  <p>GoogleBooks API and Database</p>
                </div> 
                <div className="button">
                  <a href="https://enigmatic-oasis-28658.herokuapp.com/" target="_blank" rel="noopener noreferrer">Vist Site</a>
                </div>
                <div className="button">
                  <a href="https://github.com/jazznerd206/Google-Books-Search-Engine" target="_blank" rel="noopener noreferrer">View Code</a>
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
                  <a href="https://jlcoden.github.io/Study-Buddy/" target="_blank" rel="noopener noreferrer">Vist Site</a>
                </div>
                <div className="button">
                  <a href="https://github.com/jlcoden/Study-Buddy" target="_blank" rel="noopener noreferrer">View Code</a>
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
                  <a href="https://enigmatic-oasis-28658.herokuapp.com/" target="_blank" rel="noopener noreferrer">Vist Site</a>
                </div>
                <div className="button">
                  <a href="https://github.com/jazznerd206/Green-Grub" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>    
    );
  }

export default Projects;