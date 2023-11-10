import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsByName, clearHome } from '../../redux/actions';
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [name, setName] = useState('');
  const items = useSelector((state) => state.items)

  function handleInputChange (e) {
    setName(e.target.value);
  }

  let dispatch = useDispatch();

  return <div id='searchbar'> 
    <form onSubmit={(e) => {  //en react por default se devuelve falso, por lo tanto hay que evitar eso con el metodo 
      e.preventDefault();     //preventDefault.
      dispatch(clearHome());
      dispatch(getItemsByName(name));         //manda a buscar el juego ingresado por el usuario
      setName('');            //blanquea el input
      }}>
      
      <img id='logoML' src='logo_ML.png' alt='logo' />
      <input id="input"  type="text" placeholder='Nunca dejes de buscar' onChange={handleInputChange} value={name}/> 
      <button id='searchButton'  type="submit">
        <img id='buttonImage' src='https://images.vexels.com/media/users/3/195032/isolated/lists/5c8f453f712deaccf64d803b6578abd6-escuela-de-icono-plano-de-lupa.png'/>
      </button>
    </form>
  </div>
};