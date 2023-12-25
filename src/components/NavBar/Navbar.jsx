import {useState} from "react"
import {Link} from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import "./navbar.css"

const NavBar = () => {
    const [toggle, setToggle]= useState(false)
    const onMenu = () => {
        setToggle(!toggle)
    }
    return(
        <>
        <div className="navbar-container">
            <nav className="navbar">
                <Link to = "/" className="link">
                    <span className="logo"><span>POR</span>TI<span>FO</span>LIO</span>
                </Link>
                <div className="nav-items">
                    <div className={toggle ? "nav-mobile-view" : 'nav-links'}>
                        <Link to = "/" className="link" style={{"--i":1}}><span>Home</span></Link>
                        <Link to = "/education" className="link" style={{"--i":2}}><span>Education</span></Link>
                        <Link to = "/skills" className="link" style={{"--i":3}}><span>Skills</span></Link>
                        <Link to = "/projects" className="link" style={{"--i":4}}><span>Projects</span></Link>
                        <Link to = "/contact" className="link" style={{"--i":5}}><span>Contact Me</span></Link>
                    </div>
                    <div>
                        <IoMenu onClick={onMenu} className="menu"/>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}
export default NavBar