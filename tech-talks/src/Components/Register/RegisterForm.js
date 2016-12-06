import React, {Component} from 'react';
import './RegisterStyles.css';
export default class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label id="usernameRegister">Username</label>
                    <input id="usernameReg"
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label id="passwordReg">Password</label>
                    <input id="passwordReg"
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label id="repeatPass">Repeat Password</label>
                    <input id="repeatPassForm"
                        className="form-control"
                        type="password"
                        name="repeat"
                        value={this.props.repeat}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input id="btnRegister" className="btn btn-default" type="submit" value="Register" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}