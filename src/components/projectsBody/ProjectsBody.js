import React from 'react'
import './ProjectsBody.css'
import netflixImg from '../../assets/netflix-logo.png'
import qaImg from '../../assets/login1.png'
import studentImg from '../../assets/student-tracker.png'
import tvImg from '../../assets/tv-.jpeg'
import { motion } from  'framer-motion'

function ProjectsBody() {
    return (
        <div className="projects_container">
            <div className="projects_main">
                
                    <motion.h1
                    initial={{ x: 2000}}
                    animate={{ x: 0}}
                    transition={{ delay: 3, duration: 1.5}}
                    >PROJECTS</motion.h1>
                
                <div className="projects_thumbnails"
               
        
                >
                    <div className="div1">
                    <motion.div
                    whileHover={{ scale: 1.1, duration: 5}}

                    >
                        <motion.img src={netflixImg} alt="netflix logo" width="300px" height="200px" style={{ paddingRight: 20, paddingBottom: 20}}
                        animate={{ rotateZ: 360 }}
                        transition={{ delay: 3}}
                        
                        />
                    </motion.div>

                    <motion.div
                    whileHover={{ scale: 1.1}}
                    >
                        <motion.img src={qaImg} alt="netflix logo" width="300px" height="200px"
                        animate={{ rotateZ: 360 }}
                        transition={{ delay: 3.5}}
                        />
                    </motion.div>

                    </div>
                  
                    <div className="div2">
                    <motion.div
                    whileHover={{ scale: 1.1}}
                    >
                        <motion.img src={studentImg} alt="netflix logo" width="300px" height="200px" style={{ paddingRight: 20, paddingBottom: 20}}
                        animate={{ rotateZ: 360 }}
                        transition={{ delay: 4}}
                        />
                    </motion.div>

                    <motion.div
                    whileHover={{ scale: 1.1}}
                    >
                        <motion.img src={tvImg} alt="netflix logo" width="300px" height="200px"
                        animate={{ rotateZ: 360 }}
                        transition={{ delay: 4.5}}
                        />
                    </motion.div>

                    </div>
                   
                </div>

            </div>
        </div>
    )
}

export default ProjectsBody
