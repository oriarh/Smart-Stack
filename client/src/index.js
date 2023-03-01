import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root')
)
