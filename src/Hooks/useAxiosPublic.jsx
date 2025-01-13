import axios from 'axios';

// import React from 'react';
const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-side-roan.vercel.app',
  });

  
  const useAxiosPublic = () => {
    return axiosPublic
  };
  
  export default useAxiosPublic;