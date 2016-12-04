import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {IndexRoute, browserHistory, Router, Route} from 'react-router';
import HomePage from './Components/Home/HomePage';
import About from './Components/About/AboutPage';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="about" component={About}/>
        </Route>
    </Router>,
  document.getElementById('app')
);
