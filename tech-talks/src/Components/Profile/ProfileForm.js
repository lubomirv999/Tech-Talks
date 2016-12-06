import React, {Component} from 'react';
import './ProfileStyles.css';

export default class ProfileForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div id="profileForm" className="form-group">
                    <label id="profileUsername">Username</label>
                    <input id="profileInput"
                        className="form-control"
                        type="text"
                        name="username"
                        value={sessionStorage.getItem('username')}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label id="passwordProfile">Password</label>
                    <input id="passwordInputProfile"
                        className="form-control"
                        type="password"
                        name="password"
                        value="null"
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>

            </form>
        );
    }
}