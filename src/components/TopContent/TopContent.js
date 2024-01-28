import React from 'react';
import {Link} from "react-scroll";
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Divyasri.C</h1>
            <p>Hello! I'm a passionate front-end developer 
              and a recent MCA graduate.
              with a strong foundation in web development and a keen 
              interest in creating engaging user experiences,i'm excited
               to embark on my professional journey in the world of technology.</p>
            <a href="https://drive.google.com/file/d/1prk_XpLLfTU_HgS1Ca6qZ6jK29kH2YWO/view?usp=drive_link">
                <button className="topContent__downloadButton">Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topContent__workButton">My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default TopContent