import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useCart = () => {
    const axiosSecure =useAxiosSecure()
    const {user} = useAuth()
    // console.log(user?.email)
    // const queryClient = useQueryClient()
    const {data:cart=[], refetch} = useQuery({ 
        queryKey: ['cart',user?.email],
        queryFn: async()=>{
        const res = await axiosSecure.get(`/carts/${user.email}`)
        return res.data
    }
 })
    // console.log(cart)
    return [cart,refetch]
};

export default useCart;