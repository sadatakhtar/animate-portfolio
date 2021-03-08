import React from 'react'
import './TvBody.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import tvImg from '../../assets/tv-.jpeg'

function TvBody() {
    return (
        <div className="tv_container">
            <div className="tv_img">
                <motion.h1
                   initial={{ x: -2000}}
                   animate={{ x: 0}}
                   transition={{ delay: 1, duration: 2}}
                >TV SHOWS</motion.h1>
              <Link to={{ pathname: "https://cyf-sadatakhtar-tv.netlify.app/"}} target="_blank">
                <motion.img 
                   initial={{ opacity: 0}}
                   animate={{ opacity: 1}}
                   transition={{ delay: 2, duration: 2}}
                src={tvImg} style={{ width: 330, height: 200}}/> 
              </Link>
              <motion.h4
              initial={{opacity:0}}
              animate={{opacity: 1}}
              transition={{ delay: 6, duration: 2}}
              >Click image to view app</motion.h4>
             
            </div>
            <motion.div className="tv_description"
               initial={{ x: -2000}}
               animate={{ x: 0}}
               transition={{ delay: 2, duration: 2}}
            >
                <h2>Description</h2>
                <p>This is an application which lists the complete episodes of selected TV shows. The application was coded in javaScript using an API.</p>

            </motion.div>
            <motion.div className="tv_tech"
               initial={{ x: -1500, opacity: 0}}
               animate={{ x: 0, opacity: 1}}
               transition={{ delay: 2, duration: 2}}
            >
                <h2>Technologies</h2>
                <ul>
                    <li>JavScript</li>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Netlify (FE)</li>
                    <li>Github</li>
                    
                </ul>
            </motion.div>
            

            
        </div>
    )
}

export default TvBody
