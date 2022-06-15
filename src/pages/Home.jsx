import React from 'react';
import "../App.css"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


function Home() { 
    const year = new Date().getFullYear();
    return (
        <div className="homePage" >
            <div className="header">
          <h1 className="name">Ephraim Valladares C</h1>
                <h3 className="title">Frontend Developer</h3>
            </div>
            <div className="iconsContainer">
            <a href="https://github.com/EphraimVC"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/ephraim-valladares/"><BsLinkedin /></a>
            <a href="mailto:ephraimmichael@live.com" className="mailIcon"><MdEmail/></a>
            </div>
            <div className="aboutText">
                <p>
                    Im a newely graduated Frontend developer with a
                    great interest in coding.
                    Optimistic person who dont sees problems only opportunities to learn or improve
                    both in person and work environment,
                    enjoys working with others and gladly embraces
                    new challenges.
                </p>
            </div>
            <div className="brand">
            <footer>&copy; Ephraim Valladares Cordova {year}</footer>
            </div>
           
       </div>
    )
}

export default Home;