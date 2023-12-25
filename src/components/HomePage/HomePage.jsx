

import "./homepage.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


const HomePage = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-desc">
                    <span style={{"--i":1}} className="a">Eswararao Balaga</span>
                    <p className="a" style={{"--i":2}}>A passionate individual who thrives to create sustainable and scalable solutions.</p>
                    <div className="social-links">
                        <a href="https://github.com/ESWARARAO-MAKER" style={{"--i":1}} rel="noreferrer" target="_blank" className="social"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/eswararao-balaga-03911723b/" style={{"--i":2}} rel="noreferrer" target="_blank" className="social"><FaLinkedin /></a>
                        <a href = "https://github.com/ESWARARAO-MAKER" style={{"--i":3}} rel="noreferrer" target="_blank" className="social"><CiTwitter/></a>
                    </div>
                    <div className="a" style={{"--i":3}}>
                        <a href="https://github.com/ESWARARAO-MAKER" rel="noreferrer" target="_blank" className="social">
                            <button className="home-btn">StarMe on Github</button>
                        </a>
                    </div>
                </div>
                <div className = "desc-img">
                    <img src = "/image/home.png" alt= "img" className="home-img"/>
                </div>
            </div>
            <span className="what-i-do-text">What I Do</span>
            <div className="what-i-do-container">
                <div className="home-card" style={{"--i":1}}>
                    <img src="/image/do.png" alt= "img" className="homeImg"/>
                    <span>Front End</span>
                    <p>Expertise in responsive and user-friendly websites using HTML, CSS, JavaScript, React.</p>
                </div>
                <div className="home-card" style={{"--i":2}}>
                    <img src="/image/do.png" alt= "img" className="homeImg"/>
                    <span>Back End</span>
                    <p>I can develop server side applications</p>
                </div>
                <div className="home-card" style={{"--i":3}}>
                    <img src="/image/do.png" alt= "img" className="homeImg"/>
                    <span>Full Stack</span>
                    <p>I can make Full Stack Applications using MERN Stack Technologies</p>
                </div>
            </div>

        </>
    )
}
export default HomePage