
import "./projectsPage.css"

const ProjectsPage = () => {
    return(
        <div className="projects">
            <div className="projects-page">
                <div className="project-img">
                    <img src= "/image/img/p1.jpg" alt="img" className="img"/>
                </div>
                <div className="projects-desc">
                    <span>Projects</span>
                    <p>My projects make use of a vast variety of the latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.</p>
                </div>
            </div>
            <div className="projects-container">
                <div className="project-card" style={{"--i":1}}>
                    <span>COVID DASHBOARD</span>
                    <a href="https://eswar-covid-dash-board.netlify.app/" rel="noreferrer" target="_blank"><img src="/image/Screenshot 2024-01-02 at 3.15.15 PM.png" alt= "img" className="covid-img"/></a>
                    <p>Developed an entire COVID dashboard website, which shows COVID data all over India.</p>
                    <p>Designed front end using REACT which includes fetch data from an internal server using a class component, displaying that data, using component life cycle methods, routing concepts and adding responsiveness to the website.</p>
                    <p>Used third party packages to show charts and loaders and data is fetched from third party api's.</p>
                </div>
                <div className="project-card" style={{"--i":2}}>
                    <span>Hotel Booking Application</span>
                    <a href="https://eswar-hotel-booking.netlify.app/" rel="noreferrer" target="_blank"><img src="/image/Screenshot 2024-01-02 at 3.16.26 PM.png" alt= "img" className="covid-img"/></a>
                    <p>It is a tool that allows hotel guests to schedule the dates of their stay, choose rooms at the time of booking.</p>
                    <p>Customers can view and book room online for particular place. Admin has the power of either approving or disapproving the customer's booking request.</p>
                    <p>Used third party Packages for authenticationa and for hashing.</p>
                </div>
                <div className="project-card" style={{"--i":3}}>
                    <span>Food Much Application</span>
                    <a href="https://restaurantitem.ccbp.tech/" rel="noreferrer" target="_blank"><img src="/image/p4.png" alt= "img" className="covid-img"/></a>
                    <p>It is Like Restuarent Application</p>
                    <p>This is Responsive Web Application</p>
                    <p>Mostly Bootstrap, HTML and CSS Technologies are used in this Application</p>
                </div>
            </div>
            <div className="show-more">
                <a href="https://github.com/ESWARARAO-MAKER" target="_blank" rel="noreferrer">
                    <button className="show-btn">Show More</button>
                </a>
            </div>
        </div>
    )
}
export default ProjectsPage