import React from 'react'
import centerPic from '../../assets/programmer.svg'
import jsPic from '../../assets/js.png'
import gitPic from '../../assets/git.jpeg'
import nodePic from '../../assets/node.jpeg'
import reactPic from '../../assets/react.png'
import postgres from '../../assets/postgres.png'
import { motion } from 'framer-motion'
import './HomeBody.css'

function HomeBody() {
    return (
        <div className="homebody_container">
            
            <div className="homebody_main">
                <div className="homebody_main_main">
                <motion.img id="pic" src={centerPic} alt="center pic" width="100px" height="100px"
                 initial={{ rotateZ: 0}}
                 animate={{ rotateZ: 720}}
                 transition={{ delay: 4, duration: 2}}/>
                <h2>Developer at CodeYourFuture</h2>
                <h5>Passionate about coding</h5>

                <motion.div className="homebody_skills"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: 5, duration: 2}}
                >
                <h1>JavaScript | HTML | CSS | Node | React | PostgreSQL | CCNA </h1>
                </motion.div>

                </div>
               
            </div>
            <motion.div className="homebody_icons"
                whileHover={{ 
                    scale: 1.2
                }}
            >
                <img src={jsPic} alt="javascript pic" width="150px" height="150px"/>
                <img src={gitPic} alt="git pic" width="150px" height="150px"/>
                <img src={reactPic} alt="git pic" width="150px" height="150px"/>
                <img src={nodePic} alt="git pic" width="150px" height="150px"/>
                <img src={postgres} alt="postgres pic" width="150px" height="150px"/>

            </motion.div>
          
           
           

            
        </div>
    )
}

export default HomeBody
