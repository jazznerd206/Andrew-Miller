import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home/home.js';
import Footer from './components/Footer/footer.js';
import Contact from './components/Contact/contact.js';
import Projects from './components/Projects/Projects.js';


function App() {

  

  return (
    <div className="App">
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
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
        </Router>
      <Footer />

      
    </div>
  );
}

export default App;
