import React from 'react'
import './ProjectsBody.css'
import netflixImg from '../../assets/netflix-logo.png'
import qaImg from '../../assets/qm.png'
import studentImg from '../../assets/student-tracker.png'
import tvImg from '../../assets/tv-.jpeg'
import { motion } from  'framer-motion'
import { Link } from 'react-router-dom'

function ProjectsBody() {
    return (
        <div className="projects_container">
            <div className="projects_main">
                
                    <motion.h1
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: 3, duration: 2}}
                    >PROJECTS</motion.h1>
                
                <div className="projects_thumbnails"
               
        
                >
                    <div className="div1">
                    <motion.h3
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{delay: 5, duration: 2}}
                    >Netflix clone</motion.h3>
                    <motion.div
                    whileHover={{ scale: 1.1, duration: 5}}

                    >
                       <Link to="/netflix" > <motion.img src={netflixImg} alt="netflix logo" width="300px" height="200px" style={{ paddingRight: 20, paddingBottom: 20}}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 3}}
                        
                        /></Link>
                    </motion.div>
                    
                 
                    <motion.h3
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{delay: 5, duration: 2}}
                    >Q&A App</motion.h3>
                    <motion.div
                    whileHover={{ scale: 1.1}}
                    >
                         <Link to="/question" >
                        <motion.img src={qaImg} alt="netflix logo" width="300px" height="200px"
                         initial={{ opacity: 0}}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 3, duration: 3}}
                        /></Link>
                    </motion.div>

                    </div>
                  
                    <div className="div2">
                    <motion.h3
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{delay: 5, duration: 2}}
                    >Student Tracker</motion.h3>
                    <motion.div
                    whileHover={{ scale: 1.1}}
                    >
                         <Link to="/student" >
                        <motion.img src={studentImg} alt="netflix logo" width="300px" height="200px" style={{ paddingRight: 20, paddingBottom: 20}}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 3}}
                        /></Link>
                    </motion.div>
                    <motion.h3
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{delay: 5, duration: 2}}
                    >TV Shows App</motion.h3>
                    <motion.div
                    whileHover={{ scale: 1.1}}
                    >
                        <motion.img src={tvImg} alt="netflix logo" width="300px" height="200px"
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3, duration: 3}}
                        />
                    </motion.div>

                    </div>
                   
                </div>

            </div>
        </div>
    )
}

export default ProjectsBody
