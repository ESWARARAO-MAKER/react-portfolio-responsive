import {Routes, Route, BrowserRouter} from 'react-router-dom'
import NavBar from "./components/NavBar/Navbar"
import HomePage from "./components/HomePage/HomePage"
import EducationPage from './components/EducationPage/EducationPage'
import SkillsPage from "./components/SkillsPage/SkillsPage"
import ProjectsPage from "./components/ProjectsPage/ProjectsPage"
import ContactPage from "./components/ContactPage/ContactPage"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/education" element= {<EducationPage/>}/>
        <Route path='/skills' element = {<SkillsPage/>}/>
        <Route path="/projects" element = {<ProjectsPage/>}/>
        <Route path = "/contact" element = {<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
