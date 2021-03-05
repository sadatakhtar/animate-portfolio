import React from 'react'
import './NetflixBody.css'
import netflixImg from '../../assets/netflix-logo.png'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion'

function NetflixBody() {
    return (
        <div className="net_container">
            <div className="net_img">
                <motion.h1
                   initial={{ x: 2000}}
                   animate={{ x: 0}}
                   transition={{ delay: 1, duration: 2}}
                >NETFLIX CLONE</motion.h1>
              <Link to={{ pathname: "https://netflix-clone-16e6a.web.app/"}} target="_blank">
                <motion.img 
                   initial={{ opacity: 0}}
                   animate={{ opacity: 1}}
                   transition={{ delay: 2, duration: 2}}
                src={netflixImg} style={{ width: 300, height: 200}}/> 
              </Link>
              <motion.h4
              initial={{opacity:0}}
              animate={{opacity: 1}}
              transition={{ delay: 6, duration: 2}}
              >Click image to view app</motion.h4>
             
            </div>
            <motion.div className="net_description"
               initial={{ x: 2000}}
               animate={{ x: 0}}
               transition={{ delay: 2, duration: 2}}
            >
                <h2>Description</h2>
                <p>This project is an exact clone of the popular Netflix movie streaming platform. It is coded in React and all images are delivered via an API.</p>

            </motion.div>
            <motion.div className="net_tech"
               initial={{ x: -2000}}
               animate={{ x: 0}}
               transition={{ delay: 2, duration: 2}}
            >
                <h2>Technologies</h2>
                <ul>
                    <li>JavScript</li>
                    <li>Html</li>
                    <li>Css</li>
                    <li>React</li>
                </ul>
            </motion.div>
            

            
        </div>
    )
}

export default NetflixBody
