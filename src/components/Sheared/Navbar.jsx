import React, { useContext } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
  const {user,signOutUser} =useContext(AuthContext);
  console.log(user?.email)
  
    const navOptions= <>
     <li><Link to='/'>HOME</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
              <li>
              <details>
              <summary>Our Shop </summary>
             
                <ul className="p-2 text-black">
                <li><Link to='/dashboard'>DASHBOARD</Link></li>
                <li><Link to='/order'>Order</Link></li>
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
         {
          user?<><img className='w-14 h-14 rounded-full' src={user?.photoURL} alt="" /><button className='btn' onClick={signOutUser}>Sign Out</button></>:<><NavLink to='/register'> <button className="btn">Sign Up</button></NavLink>
         <NavLink className='btn' to='/login'> <button className="btn">Sign In</button></NavLink></>
         }
        </div>
      </div>
       </div>
    );
};

export default Navbar;