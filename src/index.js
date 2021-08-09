import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App.tsx';
import {BrowserRouter, Router} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);


