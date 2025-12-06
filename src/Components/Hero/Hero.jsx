import React from "react";
import { motion } from "framer-motion";
import './hero.css'
import { Link } from "react-router-dom";
import ShopCategory from "../../pages/ShopCategory";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import hero1 from '../../assets/Frontend_Assets/hero1.webp'
import hero2 from '../../assets/Frontend_Assets/hero2.webp'
import hero3 from '../../assets/Frontend_Assets/hero3.webp'
import hero4 from '../../assets/Frontend_Assets/hero4.webp'


const Hero = () => {
  // const images = [hero1, hero2, hero3]
  const images = [{ img: hero1, heading: 'Everyday style, elevated', desc: 'Discover the season’s must haves — from easy basics to bold statements.' },
  { img: hero2, heading: 'Minimal. Timeless. Effortless.', desc: 'A clean aesthetic designed to pair easily, layer seamlessly, and last season after season.' },
  { img: hero3, heading: 'Wear Confidence, Every Day', desc: 'From soft neutrals to trend-forward silhouettes — express your style, your way.' }]
  return (
    <>

        <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }} loop={true} className="section">
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="textt">
                <h1 className="tittle text-3xl md:text-6xl font-bold text-gray-900 p-24 ">{item.heading}</h1>
                <p className="text-gray-600 text-lg pt-12">{item.desc}</p>
                <Link to={'/women'}><button>Shop Now</button></Link>
              </div>
              <img src={item.img} className="hero" alt={item.img} loading="lazy"/>
            </SwiperSlide>
          ))}
        </Swiper>

    </>
  );
};

export default Hero;
