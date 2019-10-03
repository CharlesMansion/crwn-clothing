import React, {useEffect} from 'react';
import './App.css';

import {Route, Switch, Redirect} from 'react-router-dom';
// import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import {userSessionCheck} from './redux/user/user.actions';
import {setCurrentUser} from './redux/user/user.actions';

import {Homepage} from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import SignInnUp from './pages/signinnup/signinnup.component'
import Header from './components/header/header.component'
import Checkout from './pages/checkout/checkout.component.jsx'

/*import {selectShopCollectionsForPreview} from './redux/shop/shop.selector';
import {importDocumentsAndCollections} from './firebase/firebase.utils';*/

const App = ({userSessionCheck, currentUser}) => {
  
 useEffect(() => {
  userSessionCheck()
 },[userSessionCheck])
  
  // unSubscribeFromAuth = () => {
  //   return null;
  // }

  // componentDidMount() {

    // const { userSessionCheck, /*setCurrentUser, collections*/} = this.props;

    // this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //  if (userAuth) {
    //    const userRef = await createUserProfileDocument(userAuth)
    //    userRef.onSnapshot(snapshot => {
    //      setCurrentUser({
    //          id: snapshot.id,
    //          ...snapshot.data()
    //      })
    //    })
    //  } else {
    //    setCurrentUser(userAuth)
    //  }
    // })

    // importDocumentsAndCollections('collections', collections.map(({title, items}) => ({title,items})))
    // userSessionCheck()
 //  }

//  componentWillUnmount() {
  //   this.unSubscribeFromAuth();
  // }

    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/shop" component={Shop}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/signin" render={()=>currentUser ? (<Redirect to="/"/>) : (<SignInnUp/>)}/>
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
     currentUser:selectCurrentUser /*,
     collections:selectShopCollectionsForPreview*/
   })


const mapDispatchToProps = (dispatch) => {
   return {
       setCurrentUser : (user) => dispatch(setCurrentUser(user)),
       userSessionCheck : () => dispatch(userSessionCheck())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
