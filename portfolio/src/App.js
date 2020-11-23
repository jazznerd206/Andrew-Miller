import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/home';
import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/footer.js';
import Particles from 'react-particles-js';
import particlesConfig from './config/configParticles.js';

function App() {

  

  return (
    <div className="App">
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <Nav />
        <Router>
          <Route exact path="/" component={() => <Home/>}/>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
