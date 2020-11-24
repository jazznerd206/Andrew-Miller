import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './pages/Home/home';
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/footer.js';
import Header from './components/Header/header.js';
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
                    <Route exact path="/" component={() => <Home />}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact} />
                </Switch>
        </Router>
      <Footer />

      
    </div>
  );
}

export default App;
