import React from "react";
import { useSelector } from "react-redux";
import ButtonAdd from "../../components/common/ButtonAdd/ButtonAdd";
import CartCount from "../../components/common/CartCount/CartCount";
import './ItemPage.css'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };


function ItemPage() {

const [value, setValue] = useState(0);
const [hover, setHover] = useState(-1);
const item = useSelector(state => state.item.currentItem);


if(!item) return null

  return (
    <div>
    <CartCount/>
    <div className="game-page">
      <h1 className="game-page__title">{ item.name }</h1>
        <div className="game-page__left">
          <img className="img" src={item.image}/>
          <p className="description">{item.description}</p>
          <span className="game-page__buy-game">
            <ButtonAdd item={item}/>
          </span>
          <Box className="box"
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}>
            <Rating
                name="hover-feedback"
                value={item.rating}
                precision={0.5}
                onChange={(event, newValue) => {
                setValue(newValue);}}
                onChangeActive={(event, newHover) => {
                setHover(newHover);}}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
            </Box>
        </div>
        </div>
      </div>
  );
}

export default ItemPage;
