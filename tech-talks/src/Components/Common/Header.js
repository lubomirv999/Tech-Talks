import React, {Component} from 'react';
import Hello from '../Common/Hello';

export default class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <h1>Tech Talks</h1>
                <h2>Articles</h2>
                <Hello username={this.props.username}/>
                {this.props.children}
            </div>
        );
    }
}