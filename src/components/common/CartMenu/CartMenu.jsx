import React from "react";

import "./CartMenu.css";
import { Button } from './../Button/button';
import { CartItem } from "../CartItem/CartItem";


export const CartMenu = ({items, onClick }) => {

const totalPrice = items.reduce((acc, item) => (acc += item.price), 0);

  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((item) => (
              <CartItem
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  title={item.name}
                  id={item.id}
              />
            ))
          : "Cart is empty"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Overral:</span>
            <span>{totalPrice.toFixed(2)} $</span>
          </div>
          <Button type="primary" size="s" onClick={onClick}>
             Checkout 
          </Button>
        </div>
      ) : null}
    </div>
  );
};