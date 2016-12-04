import React, {Component} from 'react';

export default class Greeting extends Component {
    render() {
        if (this.props.username === '' || this.props.username === undefined) {
            return null;
        } else {
            return (
                <span>Welcome, {this.props.username}</span>
            );
        }
    }
}