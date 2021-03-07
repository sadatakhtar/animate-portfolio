import React from 'react'
import './StudentBody.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import stImg from '../../assets/student-tracker.png'

function StudentBody() {
    return (
        <div className="student_container">
            <div className="student_img">
                <motion.h1
                   initial={{ x: -2000}}
                   animate={{ x: 0}}
                   transition={{ delay: 1, duration: 2}}
                >STUDENT TRACKER</motion.h1>
              <Link to={{ pathname: "https://cyf-student-tracker-1.herokuapp.com/"}} target="_blank">
                <motion.img 
                   initial={{ opacity: 0}}
                   animate={{ opacity: 1}}
                   transition={{ delay: 2, duration: 2}}
                src={stImg} style={{ width: 330, height: 200}}/> 
              </Link>
              <motion.h4
              initial={{opacity:0}}
              animate={{opacity: 1}}
              transition={{ delay: 6, duration: 2}}
              >Click image to view app</motion.h4>
             
            </div>
            <motion.div className="student_description"
               initial={{ x: -2000}}
               animate={{ x: 0}}
               transition={{ delay: 2, duration: 2}}
            >
                <h2>Description</h2>
                <p>The student tracker app is primarily for keeping track of the progress, attendance and development of CodeYourFuture students. This project was completed as part of a team of 11 multi skilled individuals for the Capgemini hackathon over a duration of 4 weeks</p>

            </motion.div>
            <motion.div className="student_tech"
               initial={{ x: -1500, opacity: 0}}
               animate={{ x: 0, opacity: 1}}
               transition={{ delay: 2, duration: 2}}
            >
                <h2>Technologies</h2>
                <ul>
                    <li>JavScript</li>
                    <li>Html</li>
                    <li>Css</li>
                    <li>React</li>
                    <li>Github</li>
                </ul>
            </motion.div>
            

            
        </div>
    )
}

export default StudentBody
