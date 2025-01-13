import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { BsCashStack } from "react-icons/bs";
import { FaUsers } from 'react-icons/fa';
import { AiFillProduct } from "react-icons/ai";
import { CiDeliveryTruck } from 'react-icons/ci';
import Analytics from '../Analytics';


const AdminHome = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const {data = {}} = useQuery({
        queryKey:['admin-stats'],
        queryFn:async () => {
            const res = await axiosSecure.get('/admin-stats')
            // console.log(res)
            return res.data
        }
    })
    // console.log(data.user)
    const {user:customer,product,order,revenue} = data
    // data?.map(item =>{ item})
    // console.log(data)
    return (
        <div className='p-5'>
            <h2 className='text-3xl'><span>Hi, Welcome </span>{user?.displayName? user?.displayName:'Back'}!</h2>
            {/* stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-9">
                {/* revenue */}
            <div className="stats bg-gradient-to-r from-violet-500 to-fuchsia-100 text-white py-4">
                <div className="stat flex items-center">
                <BsCashStack size={40}/>

                    <div className="">
                    <h2 className="stat-value ">{revenue}</h2>
                    <p className=" stat-title text-white">Revenue</p>
                   
                    </div>
                </div>
                </div>
                {/* Customers */}
            <div className="stats bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white py-4">
                <div className="stat flex items-center">
                <FaUsers size={40}/>

                    <div className="">
                    <h2 className="stat-value ">{customer}</h2>
                    <p className=" stat-title text-white">Customers</p>
                   
                    </div>
                </div>
                </div>
                {/* Products */}
            <div className="stats bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white py-4">
                <div className="stat flex items-center">
                <AiFillProduct size={40}/>

                    <div className="">
                    <h2 className="stat-value ">{product}</h2>
                    <p className=" stat-title text-white">Products</p>
                   
                    </div>
                </div>
                </div>
                {/* Products */}
            <div className="stats bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white py-4">
                <div className="stat flex items-center">
                <CiDeliveryTruck size={40}/>

                    <div className="">
                    <h2 className="stat-value ">{order}</h2>
                    <p className=" stat-title text-white">Order</p>
                   
                    </div>
                </div>
                </div>
            </div>

            {/* chart */}
            <div className="">
                <Analytics></Analytics>
            </div>
        </div>
    );
};

export default AdminHome;