import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import {Heart} from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import "swiper/css/effect-coverflow"
import './Testimonials.css'


function Testimonials() {
    const testimonials = [
        {
            name: "Aarav Mehta",
            role: "Customer",
            text: '"Absolutely love the quality! The fit, fabric, and finish are all perfect. I’ve already ordered more pieces."'
        },
        {
            name: "Priya Sharma",
            role: "Stylist",
            text: '"These designs are stunning and versatile — they look great in any setting. Truly elevated everyday wear!"'
        },
        {
            name: "Rohan Verma",
            role: "Blogger",
            text: '"I’m impressed by how comfortable yet classy these clothes feel. Great work on sustainable fashion too!"'
        },
        {
            name: "Simran Kaur",
            role: "Entrepreneur",
            text: '"Elegant and minimal — exactly what I was looking for. The packaging was beautiful too!"'
        },
        {
            name: "Karan Patel",
            role: "Photographer",
            text: '"The attention to detail in every stitch is amazing. These outfits photograph so well for my shoots!"'
        },
        {
            name: "Neha Gupta",
            role: "Fashion Enthusiast",
            text: '"Stylish, comfy, and eco-conscious — it’s a rare combination. I love how easy it is to style each piece."'
        },
        {
            name: "Ishaan Rao",
            role: "Model",
            text: '"The fit and finish are top-notch. It’s refreshing to see Indian brands maintaining international standards."'
        },
        {
            name: "Tanvi Desai",
            role: "Designer",
            text: '"The craftsmanship truly stands out. Each piece feels thoughtfully made, not mass-produced."'
        },
        {
            name: "Rahul Nair",
            role: "Content Creator",
            text: '"The fabric feels premium and lightweight. It’s perfect for both casual outings and travel."'
        },
        {
            name: "Aditi Joshi",
            role: "Customer",
            text: '"Quick delivery, sustainable packaging, and incredible comfort. Can’t wait to recommend this brand to friends!"'
        }
    ];

    return (
        <div className="testimonial-section">
            <h2 className="title">What Our Customers Say</h2>
            <Swiper
                navigation
                autoplay={{ delay: 4000, disableOnInteraction: true }}
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                pagination={{ clickable: true }}
                effect='coverflow'
                grabCursor={true}
                loop
                centeredSlides={true}
                slidesPerView={"2"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 60,
                    depth: 500,
                    modifier: 2,
                    slideShadows: false
                }}
                className="mySwiper"
            >
                {testimonials.map((obj, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card">
                            <h3>{obj.name}</h3>
                            <p className="text">{obj.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonials;
