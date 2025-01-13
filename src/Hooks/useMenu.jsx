import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useMenu = () => {
    const axiosSecure =useAxiosSecure()
    // const [menu,setMenu] =useState([])

    // const [loading,setLoading] = useState(true)
    //     useEffect(()=>{
    //         fetch('https://bistro-boss-restaurant-server-side-roan.vercel.app/menu')
    //         .then(res=>res.json())
    //         .then(data=>{
    //             setLoading(false)
    //            setMenu(data)
    //         })
    //         .catch(err=>console.log(err.message))
    //     },[])

        // console.log(menu)
        const {data:menu, isLoading:loading, refetch} = useQuery({
            queryKey:['menu'],
            queryFn: async () =>{
                const res = await axiosSecure.get('/menu')
                return res.data
            }
        })

    return [menu,loading,refetch]
};

export default useMenu;