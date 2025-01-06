import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { FaCalendarAlt, FaHome, FaList, FaOpencart } from "react-icons/fa";
import { FaSquareVirus } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";

import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const DashBoard = () => {
  const [isAdmin,isPending] = useAdmin();
  console.log(isAdmin?.admin  )
  if (isPending) {
    return <h2>loading.......</h2>
  }
  
  return (
        <div className=' flex'>
            <div className=" h-screen bg-orange-400 text-white p-6">
          {
            isAdmin?.admin? <ul className='space-y-4'>
            <li> <NavLink to='/dashboard' className='flex space-x-2'><FaHome size={20}/>Admin Home</NavLink></li>
            <li> <NavLink to='/dashboard/addItems' className='flex space-x-2'><FaCalendarAlt size={20}/>add items</NavLink></li>
            <li> <NavLink to='/dashboard/manageItems' className='flex space-x-2'><MdPayments size={20}/>manage items</NavLink></li>
            <li> <NavLink to='/dashboard/manageBookings' className='flex space-x-2'><FaOpencart size={20} />Manage bookings
            </NavLink></li>
            <li> <NavLink to='/dashboard/allUsers' className='flex space-x-2'><FaSquareVirus size={20} />all users
            </NavLink></li>
            <li> <NavLink to='/dashboard/bookings' className='flex space-x-2'><FaList size={20} />My Bookings
            </NavLink></li>
            <div className="divider"></div>
            <li> <NavLink to='/' className='flex space-x-2'><FaHome size={20}/>Home</NavLink></li>
            <li><NavLink to='/menu' className='flex space-x-2'><FaList size={20} />Menu</NavLink></li>
            <li><NavLink to='/order/salad' className='flex space-x-2'>Order</NavLink></li>
            <li><NavLink to='/contact' className='flex space-x-2'>CONTACT us</NavLink></li>
            <div className="divider"></div>
           </ul>
           : <ul className='space-y-4'>
           <li> <NavLink to='/' className='flex space-x-2'><FaHome size={20}/>Home</NavLink></li>
           <li><NavLink to='/menu' className='flex space-x-2'><FaList size={20} />Menu</NavLink></li>
           <li><NavLink to='/order/salad' className='flex space-x-2'>Order</NavLink></li>
           <li><NavLink to='/contact' className='flex space-x-2'>CONTACT us</NavLink></li>
          </ul>
          }

            </div>
           <div className="flex-1">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoard;