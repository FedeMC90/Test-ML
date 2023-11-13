import "./ItemCard.css";
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { getItemDetail } from '../../redux/actions';

function ItemCard(props) {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(getItemDetail(props.id));
  };
  
  return (
    <Link to={`/items/${props.id}`} style = {{textDecoration: 'none'}} >
      <div id="card" onClick={() => handleOnClick()}>
        <img id='image' src={props.image} width='400' height='250' alt='imagen'/>
        <div id='descrColumn'>
          <p id='price'>$ {props.price.toLocaleString('es-ES')}</p>
          <p id='title'>{props.title}</p>
        </div>
        <p id='location'>{props.location}</p>
      </div>  
    </Link>    
  )
}

export default ItemCard;