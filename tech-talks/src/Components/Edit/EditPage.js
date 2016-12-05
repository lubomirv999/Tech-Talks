import React, {Component} from 'react';
import EditForm from './EditForm';
import {edit, loadArticleDetails} from '../../Models/article';

export default class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            articleContent: '',
            submitDisabled: false
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {
        // Populate form
        loadArticleDetails(this.props.params.articleId, this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({
            title: response.title,
            articleContent: response.articleContent,
            submitDisabled: false
        });
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        edit(
            this.props.params.articleId,
            this.state.title,
            this.state.articleContent,
            this.onSubmitResponse
        );
    }

    onSubmitResponse(response) {
        if (response === true) {
            this.context.router.push('/articles');
        } else {
            this.setState({submitDisabled: true});
        }
    }

    render() {
        return (
            <div>
                <h1>Create Article</h1>
                <EditForm
                    title={this.state.title}
                    articleContent={this.state.articleContent}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

EditPage.contextTypes = {
    router: React.PropTypes.object
};