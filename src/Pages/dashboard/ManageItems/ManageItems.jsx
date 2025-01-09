import React from 'react';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { MdDeleteForever } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu,loading,refetch] =useMenu()
    const axiosSecure =useAxiosSecure()
    // console.log(menu)
    if (loading) {
        return <h2>loading........</h2>
    }

    const handleDelete = (item) =>{
        console.log(item)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
           
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res=>{
                if (res.data.deletedCount > 0) {
                    refetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
                console.log(res.data)})
            .catch(err=>console.log(err))
            }
          });
    }

   
    return (
        <div>
           <SectionTitle heading={'MANAGE ALL ITEMS'} subHeading={'Hurry Up!'}></SectionTitle>

           <div className="overflow-x-auto w-11/12 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
           #
          </label>
        </th>
        <th>product</th>
        <th>Category</th>
        <th>price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
        menu?.map((item,idx)=>(
            <tr key={idx}>
                <td>{idx+1}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item?.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item?.name}</div>
                  <div className="text-sm opacity-50">{item?.category}</div>
                </div>
              </div>
            </td>
            <td>
            {item?.category}
             
            </td>
            <td>{item?.price}</td>
            <td className=''><Link to={`/dashboard/updateItem/${item?._id}`}><button className='btn text-orange-400' ><FaEdit /></button></Link>
                        </td>
            <td><button className='btn text-red-500' onClick={()=>handleDelete(item)}><MdDeleteForever /></button>
                        </td>
          </tr>
        ))
      }
     
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </div>
    );
};

export default ManageItems;