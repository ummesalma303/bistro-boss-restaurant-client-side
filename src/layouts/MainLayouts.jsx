import React from 'react';
// import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Sheared/Navbar';
import Footer from '../components/Sheared/Footer';
// import Footer from '../components/footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" max-w-screen-2xl mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;