import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions= <>
     <li><Link to='/home'>HOME</Link></li>
              <li>
              <details>
              <summary><Link to='/shop'>Our Shop</Link> </summary>
             
                <ul className="p-2 text-black">
                <li><Link to='/dashboard'>DASHBOARD</Link></li>
                <li><Link to='/menu'>Our Menu</Link></li>
                </ul>
                </details>
              </li>
              <li><Link to='/contact'>CONTACT us</Link></li>
   
   
    
   
    </>
    return (
       <div className=" text-white ">
         <div className="navbar max-w-screen-2xl mx-auto fixed top-0 z-10 backdrop-opacity-10 bg-opacity-30  bg-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
             {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li><a>Item 1</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li> */}
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
       </div>
    );
};

export default Navbar;