import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import Featured from './Featured/Featured';
import PopularMenu from './PopularMenu/PopularMenu';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
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