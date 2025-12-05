import React from 'react'
import data_products from '../../assets/Frontend_Assets/data'
import Item from '../Items/Item'
import './popular.css'
import {delay, motion} from 'framer-motion'

function Popular() {
    return (
        <>
            <motion.div 
            className="popular"
            initial={{opacity: 0, translateY:70}}
            whileInView={{opacity:1, translateY:0}}
            transition={{duration:1.5}}
            viewport={{ once: true }}           // animates only the first time
            >
                <h2 className='heading'>Popular in Women</h2>
                <div className='boxes'>
                    {data_products.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} />
                    })}
                </div>
            </motion.div>
        </>
    )
}

export default Popular