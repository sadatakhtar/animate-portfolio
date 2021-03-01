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
            transition={{ delay: 2, type: 'spring', stiffness: 120}}
            >&copy; Copyright 2021. Sadat Akhtar's Portfolio Website</motion.h4>
            
        </div>
    )
}

export default Footer
