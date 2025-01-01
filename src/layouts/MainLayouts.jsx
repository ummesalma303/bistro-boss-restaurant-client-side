import React from 'react';
// import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Sheared/Navbar';
import Footer from '../components/Sheared/Footer';
// import Footer from '../components/footer';

const MainLayouts = () => {
    const location = useLocation()
//   console.log(location)
  const noHeader = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div>
            {noHeader||<Navbar></Navbar>}
            <div className=" max-w-screen-2xl mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;