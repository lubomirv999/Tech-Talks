import React, {Component} from 'react';
import {Link} from 'react-router';
import './Article.css';

export default class Article extends Component {
    render() {
        return(
            <Link to={"articles/" + this.props.id} className="team-box">
                <span className="spanner">Article name</span>
                <span className="title">{this.props.title}</span>
                <span className="spanner">Content</span>
                <p>{this.props.articleContent || 'No content, only the Title is available here!'}</p>
            </Link>
        )
    }
}