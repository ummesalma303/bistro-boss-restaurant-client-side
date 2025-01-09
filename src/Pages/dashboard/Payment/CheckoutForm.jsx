import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    // state
    
    // stripe
     const stripe = useStripe();
    const elements = useElements();

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
           console.log('[error]',error.message)
        }else{
            console.log('[PaymentMethod]', paymentMethod);
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
            <button type='submit' className='btn btn-primary' disabled={!stripe}>Pay</button>
            </form>
        </div>
    );
};

export default CheckoutForm;