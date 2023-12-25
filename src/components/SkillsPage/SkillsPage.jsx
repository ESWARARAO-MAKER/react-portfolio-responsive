import React, { useState } from "react";
import "./skillsPage.css";



export default function SkillsPage(){
    const [frontEnd, setFrontEnd] = useState(true)
    return (
    <>
        {frontEnd ? (
            <div className="skills">
            <div className="skillsSection">
                <h2>Front End Developer</h2>
                <p>Frontend Developers work closely with designers to make websites beautiful, functional, and fast. This learning path includes:</p>
                <div className="cards-container">
                    <div class="skill-card border-green" style={{"--i":1}}>
                        <p>HTML5</p>
                    </div>
                    <div className="skill-card border-dark-green" style={{"--i":2}}>
                        <p>CSS</p>
                    </div>
                    <div className="skill-card border-dark-yellow" style={{"--i":3}}>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-card border-orange" style={{"--i":4}}>
                        <p>React</p>
                    </div>
                    <div className="skill-card border-blue" style={{"--i":5}}>
                        <p>Bootstrap</p>
                    </div>
                    <div className="skill-card border-violet" style={{"--i":6}}>
                        <p>Framer Motion</p>
                    </div>
                    <div className="skill-card border-pink" style={{"--i":7}}>
                        <p>Website Layout</p>
                    </div>
                    <div className="skill-card border-red" style={{"--i":8}}>
                        <p>DOM Manipulation</p>
                    </div>
                </div>
                <button className="backend" onClick={() => setFrontEnd(!frontEnd)}>BackEnd Section</button>
            </div>
        </div>
        ) :
        
        (<div className="skills">
            <div className="skillsSection">
                <h2>Back End Developer</h2>
                <p>Frontend Developers work closely with designers to make websites beautiful, functional, and fast. This learning path includes:</p>
                <div className="cards-container">
                    <div class="skill-card border-green">
                        <p>Nodejs</p>
                    </div>
                    <div className="skill-card border-dark-green">
                        <p>Expressjs</p>
                    </div>
                    <div className="skill-card border-dark-yellow">
                        <p>SQL</p>
                    </div>
                    <div className="skill-card border-orange">
                        <p>MongoDB</p>
                    </div>
                    <div className="skill-card border-blue">
                        <p>Mongoose</p>
                    </div>
                    <div className="skill-card border-violet">
                        <p>JWT Authentication</p>
                    </div>
                    <div className="skill-card border-pink">
                        <p>Bcrypt</p>
                    </div>
                    <div className="skill-card border-red">
                        <p>REST API's</p>
                    </div>
                </div>
                <button className="backend" onClick={() => setFrontEnd(!frontEnd)}>FrontEnd Section</button>
            </div>
        </div>)}
    </>
    )
}