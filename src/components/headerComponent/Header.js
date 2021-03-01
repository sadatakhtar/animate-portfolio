import React from 'react'
import logo from '../../assets/code3.png'
import './Header.css'
import { motion } from 'framer-motion'

function Header() {
    return (
        <div className="header_container">
            <motion.div className="header_title"
              initial={{ y: -250}}
              animate={{ y: 0}}
              transition={{ type: 'spring', stiffness: 120}}
            >
                <div className="header_title1">
                    <h4>Sadat Akhtar's</h4>
                </div>
                <div className="header_title2">
                    <h1>Portfolio</h1>
                </div>
                <div className="header_title3">
                    <h4>Website</h4>
                </div>
            </motion.div>
            <div className="header_logo">
                <img src={logo} alt="logo" width="133px" height="130px"/>
            </div>
            
        </div>
    )
}

export default Header
