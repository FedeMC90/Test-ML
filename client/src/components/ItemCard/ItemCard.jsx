import "./ItemCard.css";
import React from 'react'
import { Link } from 'react-router-dom';

function ItemCard(props) {
  return (
    <Link to={`/items/${props.id}`} style = {{textDecoration: 'none'}}>
      <div id="card">
        <h3>{props.title}</h3>
        <img src={props.image} width='400' height='250' alt='imagen'/>
      </div>  
    </Link>    
  )
}

export default ItemCard