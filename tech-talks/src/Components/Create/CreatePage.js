import React, {Component} from 'react';
import CreateForm from './CreateForm';
import {create} from '../../Models/article';

export default class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            articleContent: '',
            owner: '',
            submitDisabled: false
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
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
        let owner = sessionStorage.getItem("username");
        create(
            this.state.title,
            this.state.articleContent,
            this.onSubmitResponse,
            owner
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
                <h1 id="title">Edit Article</h1>
                <CreateForm
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

CreatePage.contextTypes = {
    router: React.PropTypes.object
};