
import "./contactme.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const ContactPage = () => {
    return (
        <div className="contact">
            <div className="con-container">
                <div className="con-img">
                    <img src= "/image/background.png" alt="img" className="contact-img"/>
                </div>
                <div className="contact-desc">
                    <span>Contact Me</span>
                    <p>Thanks for Seeing my Portifolio. You can contact me through my Gmail or with my phone number</p>
                    <p>Below I Mentioned my Social media accounts and my contact information</p>
                    <div className="links">
                        <a href="https://github.com/ESWARARAO-MAKER" style={{"--i":1}} rel="noreferrer" target="_blank" className="con-social"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/eswararao-balaga-03911723b/" style={{"--i":2}} rel="noreferrer" target="_blank" className="con-social"><FaLinkedin /></a>
                        <a href = "https://github.com/ESWARARAO-MAKER" style={{"--i":3}} rel="noreferrer" target="_blank" className="con-social"><CiTwitter/></a>
                    </div>
                    <a href="https://eswarresume.ccbp.tech/" rel="noreferrer" target="_blank">
                        <button className="con-btn">See My Resume</button>
                    </a>
                </div>
            </div>
            <div className="con-container">
                <div className="contact-desc">
                    <span>Address</span>
                    <p>Vizianagaram, Andhra Pradesh, India</p>
                    <p><span>Contact:</span> 8688424915</p>
                    <p><span>Email:</span> balagaeswararao2002@gmail.com</p>
                    <a href="https://www.google.com/maps/place/Goluguvalasa,+Andhra+Pradesh+535126/@18.5126849,83.527425,15z/data=!4m15!1m8!3m7!1s0x3a3b861f4c6788bd:0x2db011fdba9e72a3!2sGoluguvalasa,+Andhra+Pradesh+535126!3b1!8m2!3d18.5114163!4d83.5270096!16s%2Fm%2F0r3rmkr!3m5!1s0x3a3b861f4c6788bd:0x2db011fdba9e72a3!8m2!3d18.5114163!4d83.5270096!16s%2Fm%2F0r3rmkr?entry=ttu" rel="noreferrer" target="_blank">
                        <button className="con-btn">Find Me on Maps</button>
                    </a>
                </div>
                <div className="con-img">
                    <img src= "/image/contact2.png" alt="img" className="contact-img"/>
                </div>
            </div>
        </div>
    )
}
export default ContactPage