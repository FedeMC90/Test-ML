import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About'
import ItemDetail from './components/ItemDetail/ItemDetail';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
	return (
		
    <div className='App'>
      <Route exact path='/' component={NavBar}/>
      <Route exact path='/items?search=' component={Home}/>
      <Route exact path='/items/:id' component={ItemDetail}/>
      <Route exact path='/about' component={About}/>     
		</div>
    
	)
}

export default App;
