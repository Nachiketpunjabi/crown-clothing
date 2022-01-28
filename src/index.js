import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store'


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>
  ,
  document.getElementById('root')
);

// Provider is parent of our whole application so that whole store can be accessed from any component