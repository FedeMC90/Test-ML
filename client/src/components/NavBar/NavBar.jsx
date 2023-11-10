import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'

function NavBar({onSearch}) {
  return (
    <div id='navbar'>
      <SearchBar id='searchbar' onSearch={onSearch}/>

    </div>
  )
}

export default NavBar