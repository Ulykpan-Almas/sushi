import React from "react";
import "./MenuItem.css";
import ButtonAdd from "./../../ButtonAdd/ButtonAdd";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentItem } from "../../../../redux/item/reducer";


const MenuItem = ({item}) => {

  const { name, description, image, rating, price } = item;
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentItem(item));
    history(`/app/${item.name}`);
  };

  
  return (
    <div className="item" onClick={handleClick}>
      <img src={image} alt="item" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
      </div>
      <div className="item-foot_desc">
        {/* <span className='foot_desc-price'>${price}</span> */}
        <ButtonAdd 
        item={item} />
      </div>
    </div>
  );
};



export default MenuItem;
