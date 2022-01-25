import React from 'react';
import Banner from './../../components/Home/Banner/Banner';
import Menu from './../../components/common/Menu/Menu';
import CartCount from '../../components/common/CartCount/CartCount';
import { newJSON } from '../../components/common/Menu/data';
import { useRef } from 'react';


function Home() {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return <div>
    <Banner handleScrollMenu={handleScrollMenu}/>
    <Menu list={newJSON} ref={menuRef}/>
    <CartCount/>
  </div>;
}

export default Home;
