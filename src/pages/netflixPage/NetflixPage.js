import React from 'react'
import Footer from '../../components/footerComponent/Footer'
import Header from '../../components/headerComponent/Header'
import NetflixBody from '../../components/netflixBody/NetflixBody'
import SideBar from '../../components/sideBarComponent/SideBar'
import './NetflixPage.css'

function NetflixPage() {
    return (
        <div className="netflix_container">
            <div className="netflix_main_wrapper">
                <SideBar />
                <div className="netflix_main">
                    <Header />
                    <NetflixBody />
                </div>
                
               
            </div>
            <div className="home_footer">
                <Footer />
            </div>
            
        </div>
    )
}

export default NetflixPage
