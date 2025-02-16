import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// images Import 
import img1 from '../assets/Images/Background.jpg'
import img2 from '../assets/Images/Book.jpg'
import img3 from '../assets/Images/Books Labrery.jpg'
import img4 from '../assets/Images/Login-background.jpg'
import img5 from '../assets/Images/Swiper-Natural-TreeWatreStone.jpg'
import img6 from '../assets/Images/Swiper-natural-IceMountain.jpg'
import img7 from '../assets/Images/Swiper-Book-light.jpg'

const images = [img1, img2, img3, img4,img5, img6, img7];

const ImageCarousel = ({ onSelect }) => {
  return (
    <div className="w-3/3 mx-auto pb-5 cursor-pointer">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-90 mt-4 object-cover rounded-lg" onClick={() => onSelect(img)}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
