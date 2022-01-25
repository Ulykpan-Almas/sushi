import React from 'react';
import './ButtonAdd.css';
import { useDispatch ,useSelector} from "react-redux";
import { setItemInCart, deleteItemFromCart} from '../../../redux/cart/reducer'


const ButtonAdd = ({item}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = products.some((product) => product.name === item.name);


  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(item.name));
    } else {
      dispatch(setItemInCart(item));
    }
  };

  return (

  <>
    <div>
        <span className='foot_desc-price'>${item.price === "-" ? 0 : item.price}</span>    
    </div>
    <div className='btnAddRemove' onClick={handleClick}>
      {isItemInCart ? "Remove" : "Add"}
    </div>
  </>
   
   );
};

export default ButtonAdd;