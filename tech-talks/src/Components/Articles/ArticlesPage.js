import React, {Component} from 'react';
import Team from './Article';
import {loadArticles} from '../../Models/article';
import {Link} from 'react-router';
//import observer from '../../models/observer';

export default class ArticlesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display articles
        this.setState({articles: response})
    }

    componentDidMount() {
        // Request list of articles from the server
        loadArticles(this.onLoadSuccess);
    }

    render() {
        let createLink = null;
        if (!sessionStorage.getItem('articleId')) {
            createLink = <Link to="/create" className="btn btn-default">Create article</Link>
        }

        return (
            <div>
                <h1>Articles Page</h1>
                {createLink}
                <div>
                    {this.state.articles.map((e, i) => {
                        return <Team key={i} title={e.title} id={e._id} articleContent={e.articleContent}/>
                    })}
                </div>
            </div>
        );
    }
}