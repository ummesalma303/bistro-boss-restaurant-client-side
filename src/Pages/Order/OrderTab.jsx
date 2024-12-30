import React from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';


// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const OrderTab = ({items}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      }; 
    return (
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
    >
          <SwiperSlide> 
        <div className="grid grid-cols-3 gap-12 w-11/12 mx-auto my-20">
        {
            items?.map(menu=> <FoodCard key={menu?._id} menu={menu}></FoodCard>)
        }
    </div>
    </SwiperSlide>
    </Swiper>
       
    );
};

export default OrderTab;