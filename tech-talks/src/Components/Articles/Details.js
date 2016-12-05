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
            owner: '',
            canEdit: false,
            ownTeam: sessionStorage.getItem('articleId') === this.props.params.articleId
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onUsersSuccess = this.onUsersSuccess.bind(this);
    }

    componentDidMount() {
        loadArticleDetails(this.props.params.articleId, this.onLoadSuccess);
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