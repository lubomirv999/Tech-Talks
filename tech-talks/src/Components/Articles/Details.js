import React, {Component} from 'react';
import {loadArticleDetails, loadUsersDetails} from '../../Models/article';
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
            canEdit: false,
            ownTeam: sessionStorage.getItem('articleId') === this.props.params.articleId,
            comments: [],
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onUsersSuccess = this.onUsersSuccess.bind(this);
        this.onCommentsLoadSuccess = this.onCommentsLoadSuccess.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.statusChange = this.statusChange.bind(this);
    }

    statusChange(response) {
        this.context.router.push('/');
    }

    componentDidMount() {
        loadArticleDetails(this.props.params.articleId, this.onLoadSuccess);
        loadArticleComments(this.props.params.articleId, this.onCommentsLoadSuccess);
    }

    onLoadSuccess(response) {
        let newState = {
            title: response.title,
            articleContent: response.articleContent,
            owner: response.owner,
        };
        if (response._acl.creator === sessionStorage.getItem('userId')) {
            newState.canEdit = true;
        }
        this.setState(newState);
    }

    onUsersSuccess(response) {
        this.setState({
            comments: response
        });
    }

    onCommentsLoadSuccess(response) {
        console.log(response);
        this.setState({comments: response})
    }

    onSubmitHandler(event) {
        event.preventDefault();
        let userId = sessionStorage.getItem('userId');
        let itemId = this.props.params.productId;
        let username = sessionStorage.getItem('username');
        addComment(this.state.text, userId, itemId, username, this.componentDidMount())
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
                    ownTeam={this.state.ownTeam}
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