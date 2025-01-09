import React from 'react';
import useCart from '../../Hooks/useCart';
import { MdDeleteForever } from 'react-icons/md';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Cart = () => {
    const axiosSecure = useAxiosSecure() 
    const [cart,refetch] = useCart()
    
    // console.log(cart)
    const totalPrice = cart.reduce((total,item)=>total+item.price,0)
    // console.log(totalPrice)
    const handleDelete=(id)=>{
        // console.log(id)
        axiosSecure.delete(`/cart/${id}`)
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
        <div className="card w-11/12 mx-auto my-4">
            <div className=' flex justify-between items-center'>
            <h2>Total orders: {cart.length}</h2>
            <h2>total price: ${totalPrice}</h2>
            {
              cart.length?<Link to='/dashboard/payment'><button className='btn btn-accent '>Pay</button></Link>:<button className='btn btn-accent' disabled >Pay</button>
            }
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>image</th>
        <th>Name</th>
        <th>price</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
     
      {/* row 2 */}
     {
        cart?.map((item,i)=> <tr className="hover" key={item._id}>
            <th>{i+1}</th>
            <td><img className='w-14 h-12' src={item?.image} alt="" /></td>
            <td>{item?.name}</td>
            <td>{item?.price}</td>
            <td className='text-red-500'><button className='btn' onClick={()=>handleDelete(item._id)}><MdDeleteForever /></button>
            </td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Cart;