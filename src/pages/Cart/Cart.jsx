import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import './Cart.css'
import Ecart from './../../components/Cart/EmptyCart/Ecart';
import { useSelector } from 'react-redux';


const Cart = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, item) => (acc += item.price), 0);

  if(items.length < 1) {
    return <Ecart/>
  }

  return <div>    
      <div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu list={items} />
          </div>
          <h3 className='orders-total'>Your Total ${totalPrice}</h3>
      </div>
  </div>;
  
};


export default Cart;
