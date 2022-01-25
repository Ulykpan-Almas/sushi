import React from 'react';
import { useNavigate } from 'react-router';
import './Ecart.css';

const Ecart = () => {
  const history = useNavigate();
  return (
    <div className='emptyCart'>
      <img src='https://merchlist.co/assets/emptycart.png' alt='' />
      <button onClick={() => history('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default Ecart;