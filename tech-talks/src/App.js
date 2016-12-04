import React, { Component } from 'react';
import Footer from './Components/Footer/Footer';
import NavigationBar from './Components/Common/NavigationBar';
import {Link} from 'react-router';
import Header from './Components/Common/Header';
import Infobox from './Components/Common/Infobox';
import observer from './Models/observer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      username: ''
    };
    observer.onSessionUpdate = this.onSessionUpdate.bind(this);
  }

  componentDidMount() {
      this.onSessionUpdate();
  }

  onSessionUpdate(){
      let name = sessionStorage.getItem("username");
      if (name) {
          this.setState({
              loggedIn: true,
              username: sessionStorage.getItem("username")
          });
      } else {
          this.setState({
              loggedIn: false,
              username: ''
          });
      }
  }

  render() {
    let navigation = {};
    if (!this.state.loggedIn){
      navigation = (
          <NavigationBar>
              <Link to="/" className="btn btn-default">Home</Link>
              <Link to="/login" className="btn btn-default">Login</Link>
              <Link to="/register" className="btn btn-default">Register</Link>
              <Link to="/about" className="btn btn-default">About</Link>
          </NavigationBar>
      )
    }else{
      navigation = (
          <NavigationBar>
            <Link to="/" className="btn btn-default">Home</Link>
            <Link to="/articles" className="btn btn-default">Articles</Link>
            <Link to="/createArticle" className="btn btn-default">Create Article</Link>
            <Link to="/about" className="btn btn-default">About</Link>
            <Link to="/logout" className="btn btn-default">Logout</Link>
          </NavigationBar>
      )
    }

    return (
      <div className="container">
          <Header username={this.state.username} loggedIn={this.state.loggedIn}>
              {navigation}
          </Header>
          {this.props.children}
          <Infobox/>
        <Footer/>
      </div>
    );
  }
}

export default App;
