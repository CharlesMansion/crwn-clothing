import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import {auth} from './firebase/firebase.utils'

import {Homepage} from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignInnUp from './pages/signinnup/signinnup.component'
import Header from './components/header/header.component'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user:null
    }
  }

  unSubscribeFromAuth = () => {
    return null;
  }

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({user:user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" component={SignInnUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
