import React from 'react'
import myvid from '../assets/Frontend_Assets/video.mp4';
import './vdo.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function MyVid() {
    return (
        <motion.div className='vid-section'
            initial={{ opacity: 0 , translateY:70}}
            whileInView={{ opacity: 1 , translateY:0}}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}>

            <h1 className='summer'>Summer Collection</h1>
            <div className="hover-effect">
                <Link to={'/women'}><button className='dicoverMore-button' onClick={()=>window.scrollTo(0,0)}>Discover More</button></Link>
                <video src={myvid} autoPlay loop muted playsInline></video>
            </div>
            
        </motion.div>
    )
}

export default MyVid;