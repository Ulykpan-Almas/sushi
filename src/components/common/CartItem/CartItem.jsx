import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart, deleteItemFromCart} from '../../../redux/cart/reducer'
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./CartItem.css";


export const CartItem = ({ title, price, name }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(name));
  };

  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">

        <span>{price.toFixed(2)} $</span>
        <AiOutlineCloseCircle
          size={15}
          className="cart-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};