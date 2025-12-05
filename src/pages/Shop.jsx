import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import MyVid from '../Components/MyVid'
import MensWear from '../Components/MensWear/MensWear'
import Swiper from '../Components/Swiper slider/Testimonials'
import Explore from '../Components/Explore/Explore'

function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Explore/>
        <MensWear/>
        <MyVid/>
        <Swiper/>
    </div>
  )
}

export default Shop