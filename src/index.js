import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MoviePage from './component/MoviePage'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';





ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
   <Route exact path="/" component={App}/>
   <Route path="/MoviePage/:id" component={MoviePage}/>


    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
