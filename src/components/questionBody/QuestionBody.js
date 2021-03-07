import React from 'react'
import './QuestionBody.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import qmImg from '../../assets/qm.png'

function QuestionBody() {
    return (
        <div className="question_container">
            <div className="question_img">
                <motion.h1
                   initial={{ x: -2000}}
                   animate={{ x: 0}}
                   transition={{ delay: 1, duration: 2}}
                >Q&A </motion.h1>
              <Link to={{ pathname: "https://question-mark.netlify.app/"}} target="_blank">
                <motion.img 
                   initial={{ opacity: 0}}
                   animate={{ opacity: 1}}
                   transition={{ delay: 2, duration: 2}}
                src={qmImg} style={{ width: 330, height: 200}}/> 
              </Link>
              <motion.h4
              initial={{opacity:0}}
              animate={{opacity: 1}}
              transition={{ delay: 6, duration: 2}}
              >Click image to view app</motion.h4>
             
            </div>
            <motion.div className="question_description"
               initial={{ x: -2000}}
               animate={{ x: 0}}
               transition={{ delay: 2, duration: 2}}
            >
                <h2>Description</h2>
                <p>This was the final project for CodeYourFuture bootcamp. Part of a multi-skilled product team of 6, 1 Project Manager, 2 TL, 3 Full Stack Developers, 4 weeks over Christmas developed and produced a solution for coding students to ask questions and receive answers, embedded with Slack notifications, and email integration.</p>

            </motion.div>
            <motion.div className="question_tech"
               initial={{ x: -1500, opacity: 0}}
               animate={{ x: 0, opacity: 1}}
               transition={{ delay: 2, duration: 2}}
            >
                <h2>Technologies</h2>
                <ul>
                    <li>JavScript</li>
                    <li>React</li>
                    <li>Github</li>
                    <li>NodeJS</li>
                    <li>postgreSQL</li>
                    <li>Node mailer</li>
                    <li>Incoming Slack Webhooks</li>
                    <li>Heroku & Netlify Deployment</li>

                </ul>
            </motion.div>
            

            
        </div>
    )
}

export default QuestionBody
