import React from 'react';
import Header from '../../components/Header/header';
import MainContent from '../../components/MainContent/maincontent';
import IconBar from '../../components/IconBar/iconbar';
import Contact from "../../components/Contact/contact";
import './style.css';


function Home() {
    return (
        <div>
            <div className="home">
                <Header />
                <IconBar />
                <Contact />
                <MainContent />
            </div>
            <div className="main">
               
            </div>


            
        </div>
    )
}

export default Home;