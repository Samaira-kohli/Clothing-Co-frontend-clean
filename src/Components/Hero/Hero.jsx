import React from "react";
import './hero.css'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from "swiper/modules";

import hero1 from '../../assets/Frontend_Assets/hero1.webp'
import hero2 from '../../assets/Frontend_Assets/hero2.webp'
import hero3 from '../../assets/Frontend_Assets/hero3.webp'

import hero1M from '../../assets/Frontend_Assets/hero1-mobile.jpg'
import hero2M from '../../assets/Frontend_Assets/hero2-mobile.png'
import hero3M from '../../assets/Frontend_Assets/hero3-mobile.jpg'

const Hero = () => {
  const images = [
    { img: hero1, mobile: hero1M, heading: 'Everyday style, elevated', desc: 'Discover the season’s must haves — from easy basics to bold statements.' },
    { img: hero2, mobile: hero2M, heading: 'Minimal. Timeless. Effortless.', desc: 'A clean aesthetic designed to pair easily, layer seamlessly, and last season after season.' },
    { img: hero3, mobile: hero3M, heading: 'Wear Confidence, Every Day', desc: 'From soft neutrals to trend-forward silhouettes — express your style, your way.' }
  ];

  return (
    <Swiper modules={[Pagination, Autoplay]} 
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }} 
      loop={true} 
      className="section">

      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="textt">
            <h1 className="tittle">{item.heading}</h1>
            <p>{item.desc}</p>
            <Link to={'/women'}><button>Shop Now</button></Link>
          </div>

          <picture>
            <source srcSet={item.mobile} media="(max-width: 600px)" />
            <img src={item.img} className="hero" alt={item.heading} loading="lazy" />
          </picture>
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default Hero;

