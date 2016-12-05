import React, {Component} from 'react';
import {loadArticleDetails, loadUsersDetails} from '../../Models/article';
import ArticleControls from './ArticleControls';
import './Details.css';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            articleContent: '',
            comments: [],
            canEdit: false,
            ownTeam: sessionStorage.getItem('articleId') === this.props.params.articleId
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onUsersSuccess = this.onUsersSuccess.bind(this);
    }

    componentDidMount() {
        loadArticleDetails(this.props.params.articleId, this.onLoadSuccess);
        loadUsersDetails(this.props.params.articleId, this.onUsersSuccess);
    }

    onLoadSuccess(response) {
        let newState = {
            title: response.title,
            articleContent: response.articleContent
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

    render() {
        let title = 'Team details';
        if (this.state.title !== '') {
            title = this.state.title + '!!!';
        }

        let comments = <p>No comments</p>;
        if (this.state.comments.length > 0) {
            comments = (
            <div>
                {this.state.comments.map((e, i) => <span key={i} className="member">{e.username}</span>)}
            </div>
            );
        }

        return (
            <div className="details-box">
                <span className="titlebar">{title}</span>
                <span className="spanner">Content</span>
                <p>{this.state.articleContent || 'No description'}</p>
                <span className="spanner">Owner</span>
                {comments}
                <span className="spanner">Team management</span>
                <ArticleControls
                    articleId={this.props.params.articleId}
                    canEdit={this.state.canEdit}
                    ownTeam={this.state.ownTeam}
                />
            </div>
        )
    }
}

Details.contextTypes = {
    router: React.PropTypes.object
};