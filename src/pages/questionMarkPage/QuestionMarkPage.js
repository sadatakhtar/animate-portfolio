import React from 'react'
import Footer from '../../components/footerComponent/Footer'
import Header from '../../components/headerComponent/Header'
import QuestionBody from '../../components/questionBody/QuestionBody'
import SideBar from '../../components/sideBarComponent/SideBar'
import './QuestionMarkPage.css'

function QuestionMarkPage() {
    return (
        <div className="question_container">
            <div className="question_main_wrapper">
                <SideBar />
                <div className="question_main">
                    <Header />
                    <QuestionBody />
                </div>
            </div>
            <div className="question_footer">
                <Footer />
            </div>
            
        </div>
    )
}

export default QuestionMarkPage
