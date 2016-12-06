import React, {Component} from 'react';
import Article from './Article';
import {loadArticles} from '../../Models/article';

export default class ArticlesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {
        // Request list of articles from the server
        loadArticles(this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        // Display articles
        this.setState({articles: response})
    }

    render() {
        return (
            <div>
                <h1>Articles Page</h1>
                <div>
                    {this.state.articles.map((e, i) => {
                        return <Article key={i} title={e.title} id={e._id} articleContent={e.articleContent}/>
                    })}
                </div>
            </div>
        );
    }
}