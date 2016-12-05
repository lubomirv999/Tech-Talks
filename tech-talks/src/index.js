import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {IndexRoute, browserHistory, Router, Route} from 'react-router';
import HomePage from './Components/Home/HomePage';
import About from './Components/About/AboutPage';
import LoginPage from './Components/Login/LoginPage';
import RegisterPage from './Components/Register/RegisterPage';
import LogoutPage from './Components/Logout/LogoutPage';
import ArticlesPage from './Components/Articles/ArticlesPage';
import CreatePage from './Components/Create/CreatePage';
import EditPage from './Components/Edit/EditPage';
import Details from './Components/Articles/Details';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="articles">
                <IndexRoute component={ArticlesPage}/>
                <Route path=":articleId" component={Details}/>
            </Route>
            <Route path="about" component={About}/>
            <Route path="createArticle" component={CreatePage}/>
            <Route path="login" component={LoginPage}/>
            <Route path="edit/:articleId" component={EditPage}/>
            <Route path="register" component={RegisterPage}/>
            <Route path="logout" component={LogoutPage}/>
        </Route>
    </Router>,
  document.getElementById('app')
);
