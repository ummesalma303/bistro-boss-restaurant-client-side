import React, { useContext } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../provider/AuthProvider';
import { IconButton } from "@material-tailwind/react";
 
const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const {data:payments=[]} = useQuery({
        queryKey:['payments',user?.email],
        queryFn: async (params) => {
            const res = axiosSecure.get(`/payment/${user?.email}`)
            return (await res).data
        }
    })
    // console.log(payments)
    return (
        <div>
            <SectionTitle heading={'PAYMENT HISTORY'} subHeading={'your payment history'}></SectionTitle>
            <div className="">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        payments?.map((payment,index) => (
            <tr key={index}>
            <th>{index + 1}</th>
            <td>{payment?.name}</td>
            <td>${payment?.price}</td>
            <td>{payment?.status}</td>
          </tr>
        ))
     }
      
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default PaymentHistory;