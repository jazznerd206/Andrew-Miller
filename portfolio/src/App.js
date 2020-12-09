import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home/home.js';
import Footer from './components/Footer/footer.js';
import Contact from './components/Contact/contact.js';
import Projects from './components/Projects/Projects.js';
import Nav from './components/Nav/Nav.js';
// import Graphics from './components/Graphics/Graphics.js';


function App() {



  return (
    <div className="App">
    {/* <Nav /> */}
      <Router>
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
