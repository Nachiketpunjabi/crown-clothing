import './App.css';
import Homepage from './pages/homepage/Homepage';
import {Route,Switch} from 'react-router-dom';

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
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
