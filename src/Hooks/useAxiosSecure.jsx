import React, { useContext } from 'react';
// import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
  
  });

const useAxiosSecure = () => {
  const {signOutUser} =useContext(AuthContext);
  const navigate = useNavigate()
  axiosSecure.interceptors.request.use(function (config) {
    
    const token = localStorage.getItem('access-token')
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    console.log(error)
    return Promise.reject(error);
  });
  // Add a response interceptor
axiosSecure.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // console.log(error?.response?.status)
  if (error.response?.status ===401 || error.response?.status === 403) {
     signOutUser()
    navigate('/login')
  }
  return Promise.reject(error);
});

    return axiosSecure
};

export default useAxiosSecure;