import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from '../Contact/contact.js'
import Projects from '../Projects/Projects.js'
import Home from '../../pages/Home/home.js'

import './styles.css';

function Nav() {
    return (
    <div>
        
        <Router>
            <div className="nav-container">
                <div className="nav-left">
                    <div className="nav-item">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/projects">Projects</Link>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="nav-item">
            
                    </div>
                    <div className="nav-item">
                        
                    </div>  
                </div>
            </div>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact} />
                </Switch>
        </Router>
    </div>
        
    )
}

export default Nav;
