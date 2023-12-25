
import "./education.css"
import { IoDesktopOutline } from "react-icons/io5";


const EducationPage = () => {
    return (
        <div className="education">
            <div className="edu-container">
                <div className="edu-image">
                    <img src = "/image/edu.png" alt="img" className="edu-img"/>
                </div>
                <div className="edu-desc">
                    <span className = "heading" style={{"--i":1}}>Education</span>
                    <p>Basic Qualification and Certification</p>
                    <span style={{"--i":2}}><IoDesktopOutline className="desktop"/></span>
                </div>
            </div>
            <div className="e-con">
                <h1 className="edu-text">Education And Certifications</h1>
                <div className="container">
                    <div className="edu-card" style={{"--i":1}}>
                        <span>NxtWave</span>
                        <p>Nxtwave's CCBP 4.0 Academy - Smart</p>
                        <p className="para">(1 March 2023 to 1 December 2024)</p>
                    </div>
                    <div className="edu-card" style={{"--i":2}}>
                        <span>UCEN - JNTUK</span>
                        <p>Bachelor of Technology - BTtech, CSE</p>
                        <p className="para">(August 2019 to April 2023)</p>
                    </div>
                    <div className="edu-card" style={{"--i":3}}>
                        <span>Sri Chaitanya Junior College</span>
                        <p>Board of Intermediate Education, MPC</p>
                        <p className="para">(2017 to 2019)</p>
                    </div>
                    <div className="edu-card" style={{"--i":4}}>
                        <span>Sri Jayendra School</span>
                        <p>Secondary School Certification (SSC)</p>
                        <p className="para">(Passed on 2017)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EducationPage