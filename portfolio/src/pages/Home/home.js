import React from 'react';
import Header from '../../components/Header/header';
import MainContent from '../../components/MainContent/maincontent';
// import Container from "react-materialize/lib/Container";
import './style.css';


function home() {
    return (
        <div>
            <div className="home">
                <Header />
                <React.Fragment>
                    <MainContent />
                </React.Fragment>
            </div>
            
        </div>
    )
}

export default home;