import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home/Home';
// import About from './components/About/About'
import ItemDetail from './components/ItemDetail/ItemDetail';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
	return (
		
    <div className='App'>
      <Route path='/' component={NavBar}/>
      <Switch>
        <Route exact path='/items/:id' component={ItemDetail}/>
        <Route path='/items' component={Home}/>
        {/* <Route exact path='/about' component={About}/>      */}
      </Switch>
		</div>
    
	)
}

export default App;
