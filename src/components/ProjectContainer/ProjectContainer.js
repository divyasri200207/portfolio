import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css";
const ProjectContainer = () => {
    const projects=[
        {
            img:"https://e0.pxfuel.com/wallpapers/965/212/desktop-wallpaper-get-income-expense-tracker.jpg",
            title:"Income And Expense Tracker",
            desc:
            "Income and Expense Tracker will maintain data and Manages your expenses and earnings in a simple and intuitive way.This will save to the local database.",
            link:"https://divyasri1907.github.io/Income-Expense-Tracker/",
        },
        {
            img:"https://nevonprojects.com/wp-content/uploads/2022/01/IV-Bag-alert-web-main.jpg",
            title:"Saline Monitoring System Using IOT",
            desc:
            "The Saline Monitoring and automatic alert system was developed in order to protect the patient and to provide them with safety during saline feeding hours. It is designed to monitor the weight of the container in order to ensure that the correct amount of saline is being used.",
            link:"www.google.com",
        },
        {
            img:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
            title:"Restaurant Website",
            desc:
            "An online Restaurant website enables ease for the customer's online information get on your stress free from restaurants as well as confusion service.",
            link:"https://divyasri1907.github.io/Restaurant-Website/",
        },
        {
            img:"https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU",
            title:"Tic Tac Toe",
            desc:
            "Tic-tac-toe is a fun game played by two players.The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
            link:" https://divyasri1907.github.io/Tic-Tac-Toe/",
        },
    ];
  return (
<Element className="projectcontainer" id="projects">
    <h1>Projects</h1>
    <p>Here are some projects which I have done.</p>
    <div className='projectcontainer__projects'>
    {
    projects.map((project,index) => {
        return(
            <Project
             key={index} 
             img={project.img} 
             title={project.title} 
             desc={project.desc} 
             link={project.link} 
             />
        )
    })
}
    </div>
</Element>
  )
}

export default ProjectContainer