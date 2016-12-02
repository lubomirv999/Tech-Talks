import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';

import KinveyRequester from './KinveyRequester';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          // TODO: Initialize the props of nav bar (call functions and bind)
          <NavigationBar/>
        </header>
        <main id='main'></main>
        <Footer/>
      </div>
    );
  }
}

export default App;
