import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from './components';
import reportWebVitals from './reportWebVitals';
import { ListsContextProvider } from './context';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <ListsContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ListsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
