import React from 'react';
import "./Banner.css"
import bannerImg from './banner.png';

function Banner({handleScrollMenu}) {
  return <header>
      <div className='header-content'>
      <div className='content-main'>
        <h1>Unique and inimitable food for your thirst</h1>
        <p>We do our best to keep food fresh and healthy. </p>
        <button onClick={handleScrollMenu}>
         View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>;
}

export default Banner;
