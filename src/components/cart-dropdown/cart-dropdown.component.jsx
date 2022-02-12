import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cartItem.component';
import CustomButton from '../custom-button/CustomButton'
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selector';
const CartDropdown = ({cartItems, history}) => {
  return <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length?
      cartItems.map(cartItem =>(
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      :
      (<span className='empty-message'>Your cart is Empty</span> )

      }
    </div>

    <CustomButton onClick={()=>console.log(history.push('/checkout'))}>GO TO CHECKOUT</CustomButton>
      
  </div>
}

const mapStateToProps= (state)=>({
  cartItems:selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
