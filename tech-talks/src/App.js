import React, { Component } from 'react';
import Footer from './Components/Footer/Footer';
import NavigationBar from './Components/Common/NavigationBar';
import {Link} from 'react-router';
import Header from './Components/Common/Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
        username: 'Pesho'
    }
  }
  render() {
    let navigation = {};
    if (!this.state.loggedIn){
      navigation = (
          <NavigationBar>
              <Link to="/" className="btn btn-default">Home</Link>
              <Link to="/about" className="btn btn-default">About</Link>
              <Link to="/login" className="btn btn-default" activeClassName="btn btn-default active">Login</Link>
          </NavigationBar>
      )
    }else{
      navigation = (
          <NavigationBar>
            <Link to="/" className="btn btn-default">Home</Link>
            <Link to="/about" className="btn btn-default">About</Link>
          </NavigationBar>
      )
    }
    return (
      <div className="container">
          <Header username={this.state.username} loggedIn={this.state.loggedIn}>
              {navigation}
          </Header>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
