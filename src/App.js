import React from 'react';
import './App.css';
import {Homepage} from './pages/homepage/homepage.component'

import {Route, Switch} from 'react-router-dom';

import Shop from './pages/shop/shop.component'


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
