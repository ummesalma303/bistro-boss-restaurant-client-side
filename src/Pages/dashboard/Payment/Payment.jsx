import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import {
    Elements,
  } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  
const Payment = () => {
   
    return (
        <div>
            <SectionTitle heading='PAYMENT' subHeading={'Please pay before buy'}></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;