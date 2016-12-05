import React, {Component} from 'react';
import Hello from '../Common/Hello';
import HeaderStyles from './HeaderStyles.css';

export default class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <h1 id="headerTitle">Tech Talks</h1>
                <Hello username={this.props.username}/>
                {this.props.children}
            </div>
        );
    }
}