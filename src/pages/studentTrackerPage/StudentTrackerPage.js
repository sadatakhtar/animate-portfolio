import React from 'react'
import './StudentTrackerPage.css'
import Header from '../../components/headerComponent/Header'
import SideBar from '../../components/sideBarComponent/SideBar'
import Footer from '../../components/footerComponent/Footer'
import StudentBody from '../../components/studentBody/StudentBody'

function StudentTrackerPage() {
    return (
        <div className="student_container">
            <div className="student_main_wrapper">
                <SideBar />
                <div className="student_main">
                    <Header />
                    <StudentBody />
                </div>
            </div>
            <div className="student_footer">
                <Footer />

            </div>
            
        </div>
    )
}

export default StudentTrackerPage
