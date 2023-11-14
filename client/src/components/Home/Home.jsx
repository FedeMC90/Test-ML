import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../ItemCard/ItemCard";
import './Home.css';
import load from '../../Media/Loading.gif';

const Home = () => {
  // Hooks: Con el useSelector me traigo lo que hay en el estado de items
  const items = useSelector ((state) => state.items);
  // Creo un estado local que me guarde mi página actual
  const [currentPage, setCurrentPage] = useState(1); 
  // En este estado guardo la cantidad de juegos que quiero por página
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage; 
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  
  let loading = useSelector (state => state.loading);
  
  return (
    loading ? <img id="load" src={load} alt="Loading..."/> :
    <div id="home">
      <div id='itemcard'>
      {currentItems.map(m => {
          return (          
          <ItemCard 
            key={m.id}
            id={m.id}
            title={m.title}
            price={m.price}
            location={m.address.state_name}
            image={m.thumbnail}/>
      )})}
      </div>
          
    </div>
  )
}

export default Home;
