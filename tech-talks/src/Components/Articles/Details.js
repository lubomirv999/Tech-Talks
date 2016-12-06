import React, {Component} from 'react';
import {loadArticleDetails} from '../../Models/article';
import ArticleControls from './ArticleControls';
import './Details.css';
import { addComment, loadArticleComments } from '../../Models/comment'
import Comment from '../Comments/Comments'

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            articleContent: '',
            owner: '',
            text: '',
            canEdit: false,
            ownArticle: sessionStorage.getItem('articleId') === this.props.params.articleId,
            comments: []
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onCommentsLoadSuccess = this.onCommentsLoadSuccess.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        loadArticleDetails(this.props.params.articleId, this.onLoadSuccess);
        loadArticleComments(this.props.params.articleId, this.onCommentsLoadSuccess);
    }

    onLoadSuccess(response) {
        let newState = {
            title: response.title,
            articleContent: response.articleContent,
            owner: response.owner
        };
        if (response._acl.creator === sessionStorage.getItem('userId')) {
            newState.canEdit = true;
        }
        this.setState(newState);
    }

    onCommentsLoadSuccess(response) {
        this.setState({comments: response})
    }

    onSubmitHandler(event) {
        event.preventDefault();
        let userId = sessionStorage.getItem('userId');
        let itemId = this.props.params.articleId;
        let username = sessionStorage.getItem('username');
        addComment(this.state.text, userId, itemId, username, loadArticleComments(this.props.params.articleId, this.onCommentsLoadSuccess));
        loadArticleComments(this.props.params.articleId, this.onCommentsLoadSuccess)
        this.setState({text: ''})
    }

    onChangeHandler(event) {
        this.setState({text: event.target.value})
    }


    render() {
        let title = 'Article';
        if (this.state.title !== '') {
            title = this.state.title + '!!!';
        }


        return (
            <div className="details-box">
                <span className="spanner">Title</span>
                <span className="titlebar">{title}</span>
                <span className="spanner">Content</span>
                <p>{this.state.articleContent || 'No description'}</p>
                <span className="spanner">Owner - {this.state.owner}</span>
                <ul>
                    {this.state.comments.map((comment, index) => {
                        return (
                            <li key={index}>{comment.text + ' posted by: ' + comment.username}</li>
                        )
                    })}
                </ul>
                <ArticleControls
                    articleId={this.props.params.articleId}
                    canEdit={this.state.canEdit}
                    ownTeam={this.state.ownArticle}
                />
                <Comment
                    text={this.state.text}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        )
    }
}

Details.contextTypes = {
    router: React.PropTypes.object
};