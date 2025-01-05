import React, { useEffect } from 'react';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data:users=[],isPending} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    if (isPending) {
        return <h2>Loading......</h2>
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
      
            {
                users?.map((user,i)=> <tr className="bg-base-200">
                    <th>{i+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td> <FaUsers className="text-white bg-orange-500 text-2xl"/></td>
                    <td><button><FaTrashAlt className="text-red-600"/></button></td>
                  </tr>)
            }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;