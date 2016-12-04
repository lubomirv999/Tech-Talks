import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {login} from '../../Models/user';

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
            </div>
        );
    }
}

LoginPage.contextTypes = {
    router: React.PropTypes.object
};