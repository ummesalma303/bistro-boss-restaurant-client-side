import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useCart from '../../../Hooks/useCart';

const SslPayment = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext);
    const [cart] = useCart()
    // useEffect(() => {
        const totalPrice = cart?.reduce((total,item)=> total + item.price,0)
    
      
    // }, [cart])
    // console.log(user)
    const handleCreatePayment = async () =>{
        const payment ={
            email: user?.email,
            name: user?.displayName,
            date: new Date(),
            transactionId: '',
            menuId: cart.map(item => item.menuId),
            cartIds: cart.map(item => item._id),
            price:totalPrice,
            status:'pending'
           }

           const response = await axiosPublic.post('/create-ssl-payments',payment)
           console.log(response.data)
           if (response.data.gatewayUrl) {
            window.location.replace(response.data.gatewayUrl)
           }
    }
    return (
        <div className='card card-body border-2'>
            <h2 className='text-2xl font-bold'>Payment details</h2>
            <p>complete your order by providing your details</p>
            <input type="text" placeholder="Type here" value={user?.email} className="input input-info" />
            <button onClick={handleCreatePayment} className='btn bg-black text-white'>Place Order</button>
        </div>
    );
};

export default SslPayment;