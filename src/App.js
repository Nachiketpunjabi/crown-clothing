import './App.css';
import Homepage from './pages/homepage/Homepage';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';
import SignPage from './pages/SignPage/SignPage';
import checkoutPage from './pages/checkout/checkout.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selector'


class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser}= this.props;

    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userauth=>{
      if(userauth){
        const userRef = await createUserProfileDocument(userauth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        });
        
      }
      else{
        setCurrentUser(userauth)
      }
      
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage}/>
          <Route exact path="/checkout" component={checkoutPage} />
          <Route path='/signin' component={SignPage}/>
        </Switch>
      </div>
    );
  }
  
}
const mapStateToProps = (state)=>({
  currentUser:selectCurrentUser(state)
})



const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
