import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { FaCalendarAlt, FaHome, FaList, FaOpencart } from "react-icons/fa";
import { FaSquareVirus } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";

import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className=' flex'>
            <div className=" h-screen bg-orange-400 text-white p-6">
           <ul className='space-y-4'>
            <li> <NavLink to='/dashboard/userHome' className='flex space-x-2'><FaHome size={20}/>User Home</NavLink></li>
            <li> <NavLink to='/dashboard/reservation' className='flex space-x-2'><FaCalendarAlt size={20}/>reservation</NavLink></li>
            <li> <NavLink to='/dashboard/payment' className='flex space-x-2'><MdPayments size={20}/>payment history</NavLink></li>
            <li> <NavLink to='/dashboard/cart' className='flex space-x-2'><FaOpencart size={20} />my cart
            </NavLink></li>
            <li> <NavLink to='/dashboard/review' className='flex space-x-2'><FaSquareVirus size={20} />add review
            </NavLink></li>
            <li> <NavLink to='/dashboard/bookings' className='flex space-x-2'><FaList size={20} />My Bookings
            </NavLink></li>
            <div className="divider"></div>
            <li> <NavLink to='/' className='flex space-x-2'><FaHome size={20}/>Home</NavLink></li>

           </ul>

            </div>
           <div className="flex-1">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoard;