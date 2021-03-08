import React from 'react'
import Footer from '../../components/footerComponent/Footer'
import Header from '../../components/headerComponent/Header'
import SideBar from '../../components/sideBarComponent/SideBar'
import TvBody from '../../components/tvBody/TvBody'
import './TvShowPage.css'

function TvShowPage() {
    return (
        <div className="tv_container">
            <div className="tv_main_wrapper">
                <SideBar />
                <div className="tv_main">
                    <Header />
                    <TvBody />
                </div>
            </div>
            <div className="tv_footer">
                <Footer />
                
            </div>
            
        </div>
    )
}

export default TvShowPage
