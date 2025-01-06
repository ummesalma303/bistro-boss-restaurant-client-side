import React, { useEffect } from 'react';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data:users=[],isPending,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',{
              headers: {authorization:`Bearer ${localStorage.getItem('access-token')}`}
            });
            return res.data;
        }
    })
    if (isPending) {
        return <h2>Loading......</h2>
    }

    const handleMakeAdmin = (user) =>{
      // console.log(id)
     axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
          refetch();
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500
            });
      }
      })
      .catch(err=>console.log(err))
    }
     const handleDelete=(user)=>{
            // console.log(id)
            axiosSecure.delete(`/users/${user._id}`)
            .then(res=>{
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (res.data.deletedCount > 0) {
                        if (result.isConfirmed) {
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
    
                          console.log(res.data)
                          refetch()
                    }
                    }
                  });
    
    
            })
            .catch(err=>console.log(err))
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
        <th>Roll</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
      
            {
                users?.map((user,i)=> <tr key={i} className="bg-base-200">
                    <th>{i+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    {/* <td>Customer</td> */}
                    <td> {
                      user.role?<h2>Admin</h2>:<button onClick={()=>handleMakeAdmin(user)}><FaUsers className="text-white bg-orange-500 text-2xl"/></button>
                      }</td>
                    <td><button onClick={()=>handleDelete(user)}><FaTrashAlt className="text-red-600"/></button></td>
                  </tr>)
            }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;