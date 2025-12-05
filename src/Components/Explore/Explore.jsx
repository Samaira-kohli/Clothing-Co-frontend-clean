import React from 'react'
import './explore.css'
import {motion} from 'framer-motion'

function Explore() {
  return (
    <motion.div className='aboutus-banner'
    initial={{opacity:0, translateY:70}}
    whileInView={{opacity:1, translateY:0}}
    transition={{duration:1}}
    viewport={{ once: true }}  >
        <h1 className='explore'>About Us</h1>
        <p className='para'>At Clothing Co., we redefine style with every stitch, from premium fabrics to modern designs, our pieces blend comfort, quality, and trendsetting fashion.<br/>Discover collections that push boundaries and make a statement —experience the Clothing Co. difference today.</p>
    </motion.div>
  )
}

export default Explore;