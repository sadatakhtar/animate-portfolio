import React from 'react'
import './SideBar.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div className="sidebar_container"
        
        >
            <div className="sidebar_title">
                <h2>Menu</h2>
            </div>
            <hr/>

            <motion.div className="sidebar_links"
            initial={{ x: -250}}
            animate={{ x: 0}}
            transition={{delay: 1.5, type: 'spring', stiffness: 120}}
          
            >
                <ul>
                    <motion.li
                    whileHover={{ scale: 1.5 , textShadow: "0px 0px 8px rgb(255,255,255)", originX: 0}}
                    ><Link to="/home" style={{textDecoration: 'none', color: 'whitesmoke'}}>Projects</Link></motion.li>
                    <motion.li
                    whileHover={{ scale: 1.5, textShadow: "0px 0px 8px rgb(255,255,255)" , originX: 0}}
                    
                    ><Link to="/home" style={{textDecoration: 'none', color: 'whitesmoke'}}>CV</Link></motion.li>
                    <motion.li
                    whileHover={{ scale: 1.5 , textShadow: "0px 0px 8px rgb(255,255,255)" , originX: 0}}
                    ><Link to="/home" style={{textDecoration: 'none', color: 'whitesmoke'}}>About</Link></motion.li>
                    <motion.li
                    whileHover={{ scale: 1.5 , textShadow: "0px 0px 8px rgb(255,255,255)" , originX: 0}}
                    ><Link to="/home" style={{textDecoration: 'none', color: 'whitesmoke'}}>Contact</Link></motion.li>
                </ul>

            </motion.div>
            
        </div>
    )
}

export default SideBar
