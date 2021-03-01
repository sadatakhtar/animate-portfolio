import React from 'react'
import Footer from '../../components/footerComponent/Footer'
import Header from '../../components/headerComponent/Header'
import HomeBody from '../../components/homeBody/HomeBody'
import SideBar from '../../components/sideBarComponent/SideBar'
import './HomePage.css'

function HomePage() {
    return (
        <div className="home_container">
            <div className="home_main_wrapper">
                <SideBar />
                <div className="home_main">
                    <Header />
                    <HomeBody />
                </div>
                
               
            </div>
            <div className="home_footer">
                <Footer />
            </div>
            
        </div>
    )
}

export default HomePage
