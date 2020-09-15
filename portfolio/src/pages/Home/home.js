import React from 'react';
import Header from '../../components/Header/header';
import MainContent from '../../components/MainContent/maincontent';
import IconBar from '../../components/IconBar/iconbar';
import Container from "react-materialize/lib/Container";
import './style.css';


function home() {
    return (
        <div>
            <div className="home">
                <Header />
                <MainContent />
                <IconBar />
            </div>
            <div className="main">
               
            </div>


            
        </div>
    )
}

export default home;