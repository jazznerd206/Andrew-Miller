import React from 'react';
import Header from '../../components/Header/header';
import MainContent from '../../components/MainContent/maincontent';
import Contact from "../../components/Contact/contact";
// import Footer from "../../components/Footer/footer";
import './style.css';


function Home() {
    return (
        <div>
            <div className="home">
                <Header />
                <MainContent />
                <Contact />
                {/* <Footer /> */}
            </div>
            <div className="main">
               
            </div>


            
        </div>
    )
}

export default Home;