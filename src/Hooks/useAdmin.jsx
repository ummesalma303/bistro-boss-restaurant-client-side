import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
// import React from 'react';

const useAdmin = () => {
   const {user} =useContext(AuthContext);
    console.log(user?.email)
    const axiosSecure = useAxiosSecure()
    const {data:isAdmin,isPending} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn: async () =>{
           const res = await axiosSecure.get(`/users/admin/${user.email}`)
        //    console.log(res.data)
            return res.data
        }
    })
    return [isAdmin,isPending]
};

export default useAdmin;