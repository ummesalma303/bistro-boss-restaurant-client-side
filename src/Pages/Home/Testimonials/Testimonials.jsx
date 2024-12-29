import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import React, { useEffect, useState,useRef } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import React, {  } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
            fetch('reviews.json')
            .then(res=>res.json())
            .then(data=>{
                setReviews(data)
                // const popularMenu = data.filter(item=>item.category === 'popular')
                // setMenu(popularMenu)
            })
        },[])
        // console.log(reviews)
    return (
        <div>
            <SectionTitle heading={'TESTIMONIALS'} subHeading={'What Our Clients Say'}></SectionTitle>

            <div className="">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> 
            {
                    reviews?.map(review=>  <SwiperSlide key={review._id}><div className='w-2/3 mx-auto text-center'> <Rating className='mx-auto'
                        style={{ maxWidth: 180 }}
                        value={review?.rating}
                        readOnly
                      />
                          <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3></div></SwiperSlide>)
            }
            </Swiper>
                
            </div>
        </div>
    );
};

export default Testimonials;