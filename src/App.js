import './App.css';
import Homepage from './pages/homepage/Homepage';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';
const HatsPage = () =>{
  return (
    <div>
      <h1> Hats page</h1>
    </div>
  );
}

function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
