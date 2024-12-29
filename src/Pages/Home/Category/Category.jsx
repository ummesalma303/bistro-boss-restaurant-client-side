import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination,Autoplay } from 'swiper/modules';


import category1 from '../../../assets/home/slide1.jpg'
import category2 from '../../../assets/home/slide2.jpg'
import category3 from '../../../assets/home/slide3.jpg'
import category4 from '../../../assets/home/slide4.jpg'
import category5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <SectionTitle heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}></SectionTitle>
             <Swiper
        slidesPerView={4}
        loop={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        spaceBetween={8}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={category1} alt="" />
            <h2 className='-mt-20 text-center text-white text-3xl '>Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={category2} alt="" />
        <h2 className='-mt-20 text-center text-white text-3xl'>pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={category3} alt="" />
        <h2 className='-mt-20 text-center text-white text-3xl'>Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={category4} alt="" />
        <h2 className='-mt-20 text-center text-white text-3xl '>desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
        <img src={category5} alt="" />
        <h2 className='-mt-16 mb-8 text-center text-white text-3xl'>Salads</h2>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;