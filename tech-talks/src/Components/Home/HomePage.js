import React, { Component } from 'react';
import './HomeStyles.css';

export default class HomePage extends Component {
    render(){
        let message = <p>You are currently not logged.</p>

        if(sessionStorage.getItem('username')) {
            message = <div>Welcome, {sessionStorage.getItem('username')}!</div>
        }

        return (
            <div id="homePage">
                <h1 id="title">Home Page</h1>
                {message}
            </div>
        )
    }
}