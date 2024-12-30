import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import Featured from './Featured/Featured';
import PopularMenu from './PopularMenu/PopularMenu';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>

            <div>
                <PopularMenu></PopularMenu>
            </div>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;