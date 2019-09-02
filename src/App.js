import React from 'react';
import './App.css';

import {Route, Switch, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';

import {setCurrentUser} from './redux/user/user.actions';

import {Homepage} from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignInnUp from './pages/signinnup/signinnup.component'
import Header from './components/header/header.component'

class App extends React.Component {
  
 
  
  unSubscribeFromAuth = () => {
    return null;
  }

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth)
       userRef.onSnapshot(snapshot => {
         setCurrentUser({
             id: snapshot.id,
             ...snapshot.data()
         })
       })
     } else {
       setCurrentUser(userAuth)
     }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={Shop}/>
        <Route exact path="/signin" render={()=>this.props.currentUser ? (<Redirect to="/"/>) : (<SignInnUp/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    currentUser:user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser : (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
