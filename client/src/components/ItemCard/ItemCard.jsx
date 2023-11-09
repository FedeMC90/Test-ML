import "./ItemCard.css";
import React from 'react'
import { Link } from 'react-router-dom';

function ItemCard(props) {
  return (
    <Link to={`/Item/${props.id}`} style = {{textDecoration: 'none'}}>
      <div id="card">
        <h3>{props.name}</h3>
        <img src={props.background_image} width='400' height='250' alt={props.background_name}/>
        <ul id='genresul'>
          {props.genres.map(e => <li key={e.name}>{e.name}</li>)}
        </ul> 
      </div>  
    </Link>    
  )
}

export default ItemCard