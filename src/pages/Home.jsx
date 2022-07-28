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
            <a className='buttons github' href="https://github.com/EphraimVC"><BsGithub /></a>
            <a className='buttons linkedIn' href="https://www.linkedin.com/in/ephraim-valladares/"><BsLinkedin /></a>
            <a className='buttons gmail' href="mailto:ephraimmichael@live.com"><MdEmail/></a>
            </div>
            <div className="aboutText">
                <p class="description text-base">
                    
                    CURIOUS | OPTIMISTIC | CREATIVE | TEAM PLAYER                    
                            </p>
                        
 </div>
         <div className="brand">
            <p className='mb-5 text-sm'>
               Newer and cooler personal website is coming soon
            </p>
            <footer>&copy; Ephraim Valladares Cordova {year}</footer>
            </div>
           
       </div>
    )
}

export default Home;