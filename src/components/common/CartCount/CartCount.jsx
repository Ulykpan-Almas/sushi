import React from 'react';
import './CartCount.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { CartMenu } from '../CartMenu/CartMenu';
import { useState } from 'react';
import { ItemsInCart } from '../ItemsInCart/ItemsInCart';
import { useCallback } from 'react';


const CartCount = () => {

  const history = useNavigate();
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, item) => (acc += item.price), 0);
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    history('/cart');
  }, [history])
 
  return (
    <>   
    <div className='btnCartCount' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}>
    <ItemsInCart quantity={items.length}/> 
        {totalPrice>0 ? (
          <h4 className='h3'>{totalPrice.toFixed(2)}</h4>
        ): <i className='fas fa-shopping-cart'></i>}    
    </div>

      {isCartMenuVisible && <CartMenu items={items} onClick={handleGoToOrderClick}/>}
    

    </>
  );
};


export default CartCount;