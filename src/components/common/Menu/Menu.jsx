import React, { forwardRef } from 'react';
import './Menu.css';
import MenuItem from './MenuItem/MenuItem';
import { useState } from 'react';



const Menu = forwardRef(({ list }, ref) => {

  const [searchField, setSearchField] = useState("");
  

  let filteredPersons = list.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );


  const handleChange = e => {
    setSearchField(e.target.value);
  };


  return(
    <div>
      <center><input 
          className="search__input"
          type="text" 
          placeholder="Search" 
          onChange = {handleChange}
        /></center>
    <main ref={ref}>
      {filteredPersons.map((item) => (
        <MenuItem item={item} key={item.id}/>
      ))}
    </main>
  </div>
  )

    })

export default Menu;