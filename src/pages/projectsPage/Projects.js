import React from 'react'
import './Projects.css'
import Header from '../../components/headerComponent/Header'
import SideBar from '../../components/sideBarComponent/SideBar'
import ProjectsBody from '../../components/projectsBody/ProjectsBody'
import Footer from '../../components/footerComponent/Footer'

function Projects() {
    return (
        <div className="projects_container">
            <div className="projects_main_wrapper">
                <SideBar />
                <div className="projects_main">
                    <Header />
                    <ProjectsBody />
                </div>

            </div>
            <div className="projects_footer">
                <Footer />
            </div>
            
        </div>
    )
}

export default Projects
