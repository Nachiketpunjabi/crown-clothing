import React from 'react';
import "./cartItem.styles.scss"

const cartItem = ({item:{imageUrl,price, name, quantity}}) => {
  return <div className='cart-item'>
      <img src={imageUrl} alt="item"/>
      <div className='item-details'>
        <span clasName='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
  </div>;
};

export default cartItem;
