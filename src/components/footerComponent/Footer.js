import React from 'react'
import './Footer.css'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <div className="footer_container"
        
        >
            <motion.h4
            initial={{ x: 1600}}
            animate={{ x: 0}}
            transition={{ delay: 1, duration: 2 }}
            >&copy; Copyright 2021. Sadat Akhtar's Portfolio Website</motion.h4>
            
        </div>
    )
}

export default Footer
