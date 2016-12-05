import React, { Component } from 'react';

export default class HomePage extends Component {
    render(){
        let message = <p>You are currently not logged.</p>

        if(sessionStorage.getItem('username')) {
            message = <div>Welcome, {sessionStorage.getItem('username')}!</div>
        }

        return (
            <div>
                <h1>Home Page</h1>
                {message}
            </div>
        )
    }
}