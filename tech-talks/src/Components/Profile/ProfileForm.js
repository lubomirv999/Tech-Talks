import React, {Component} from 'react';

export default class ProfileForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={sessionStorage.getItem('username')}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
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