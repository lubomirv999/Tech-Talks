import React, {Component} from 'react';
import './LoginPageStyles.css';

export default class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label id="username">Username</label>
                    <input id="usernameInput"
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label id="password">Password</label>
                    <input id="passwordInput"
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input id="btnLogin" className="btn btn-default" type="submit" value="Login" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}

