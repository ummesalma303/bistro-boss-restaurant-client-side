import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useCart from '../../../Hooks/useCart';
// import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from "sweetalert2";
import { Navigate, useNavigate } from 'react-router-dom';

const CheckoutForm = () => { 
    const navigate = useNavigate()
    const [cart] = useCart()
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    // console.log(cart)
    
    // state
    const [error,setError] = useState('')
    // const [success,setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transaction, setTransaction] = useState("");
    // stripe
     const stripe = useStripe();
    const elements = useElements();

    const totalPrice = cart?.reduce((total,item)=> total + item.price,0)
    // console.log(totalPrice)
    useEffect(()=>{
       if(totalPrice>0){
        axiosSecure.post(`/create-payment-intent`,{price:totalPrice})
        .then(res=>{
            setClientSecret(res.data.clientSecret)
        })
        .catch(error=>console.log(error))
    }
},[axiosSecure,totalPrice])

// console.log(clientSecret)

    const handleSubmit = async e =>{
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
        //    console.log('[error]',error.message)
           setError(error.message)
        }else{
            // console.log('[PaymentMethod]', paymentMethod.id);
            // setSuccess(paymentMethod.id)
            setError('')
        }


        // const confirm payment 
        // console.log(clientSecret)
        const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                    },
            }
        })
        if (confirmError) {
            // console.log('confirm error',confirmError)
        }else{
            console.log('paymentIntent====>',paymentIntent.status);
            if (paymentIntent?.status === 'succeeded') {
            setTransaction(paymentIntent.id);
            const payment ={
             email: user?.email,
             name: user?.displayName,
             date: new Date(),
             transactionId: paymentIntent.id,
             menuId: cart.map(item => item.menuId),
             cartIds: cart.map(item => item._id),
             price:totalPrice,
             status:'pending'
            }
            axiosSecure.post('/payment',payment)
            .then(res =>{
                //  console.log(res.data)
                if (res.data.paymentResult.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for payment",
                        showConfirmButton: false,
                        timer: 1500
                })
                navigate('/dashboard/paymentHistory')
                }


                })
            .catch(err=>{
                // console.log(err)
            })
            }


        }


    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                
<CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      
            {/* <PaymentElement /> */}
           {transaction&& <p className='text-green-600'>transactionID: {transaction}</p>}
            <p className='text-red-500'>{error}</p>
            <button type='submit' className='btn btn-primary' disabled={!stripe || !clientSecret}>Pay</button>
            </form>
        </div>
    );
};

export default CheckoutForm;