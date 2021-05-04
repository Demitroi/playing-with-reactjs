// En este archivo es donde empieza todo, se importa react y sus cosillas
// Se importa la App que es el componente principal.
// ReactDOM es para comenzar a renderizar, y le mandamos el App como un componente.
// Todo eso se hace sobre el elemento raíz que se encuentra en el index.html del public.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
