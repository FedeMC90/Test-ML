import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getItemsByName } from '../../redux/actions';
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [name, setName] = useState('');
  const history = useHistory();

  function handleInputChange (e) {
    setName(e.target.value);
  }

  let dispatch = useDispatch();

  return <div id='searchbar'> 
    <form onSubmit={(e) => {  //en react por default se devuelve falso, por lo tanto hay que evitar eso con el metodo 
      e.preventDefault();     //preventDefault
      dispatch(getItemsByName(name));         //manda a buscar el item ingresado por el usuario
      history.push(`/items?search=${name}`)
      setName('');            //blanquea el input
      }}>
      
      <img id='logoML' src='logo_ML.png' alt='logo' />
      <input 
        id="input"  
        type="text" 
        placeholder='Nunca dejes de buscar' 
        onChange={handleInputChange} 
        value={name}/> 
        <button id='searchButton'  type="submit">
          <img id='buttonImage' src='https://images.vexels.com/media/users/3/195032/isolated/lists/5c8f453f712deaccf64d803b6578abd6-escuela-de-icono-plano-de-lupa.png' alt='search'/>
        </button>
    </form>
  </div>
};