import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({price})=>{
    const priceForStripe= price*100;
    const publishKey='pk_test_51KT8ZWSIGjxRPFiUlTgBZQtGbJDtvXLDfJWuDpELwXYeaKdjUFJyUM0VgNkXFES0I7lG5fNIMojQivtPuBbjgd7S00wnf8Vjwa';

    const onToken= token=>{
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name= 'Ami Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total value is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token ={onToken}
            stripeKey={publishKey}
            />
    )
}

export default StripeCheckoutButton;