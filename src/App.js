import './App.css';
import Homepage from './pages/homepage/Homepage';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';
import SignPage from './pages/SignPage/SignPage';
import { auth } from './firebase/firebase.utils';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();

    this.state ={
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user)
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
