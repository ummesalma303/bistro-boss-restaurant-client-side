import React, { useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import {
    Elements,
  } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import SslPayment from './SslPayment';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  
const Payment = () => {
   const [value,setValue] = useState('Stripe');
//    console.log( value)
    return (
        <div className='w-11/12 mx-auto'>
            <SectionTitle heading='PAYMENT' subHeading={'Please pay before buy'}></SectionTitle>

            <div className="my-12">
            <select onChange={(e)=>setValue(e.target.value)} defaultValue="Pick a color" className="select">
  {/* <option disabled={true}>Pick a method</option> */}
  <option>Stripe</option>
  <option>Ssl commerz</option>
  {/* <option>Velvet</option> */}
</select>
            </div>

           {
           value==='Stripe' && <Elements stripe={stripePromise}>
                <CheckoutForm ></CheckoutForm>
            </Elements>}

            {
                value==='Ssl commerz'&&<SslPayment/>
                }
        </div>
    );
};

export default Payment;