import React from 'react'
import men1 from '../../assets/Frontend_Assets/men1.jpg'
import './men.css'
import { Link } from 'react-router-dom'

function MensWear() {
  return (
    <div className='men-banner'>
        <img src={men1} alt='' loading="lazy"/>
        <Link to={'/men'}><button className='dicover-button' onClick={() => window.scrollTo({ top: 0, left: 0})}>Explore Men's Collection</button></Link>
    </div>
  )
}

export default MensWear