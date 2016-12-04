import React, {Component} from 'react';
import Hello from '../Common/Hello';

export default class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <h1>Articles</h1>
                <Hello username={this.props.username}/>
                {this.props.children}
            </div>
        );
    }
}