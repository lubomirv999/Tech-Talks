import React, {Component} from 'react';
import ProfileForm from './ProfileForm';
import {edit} from '../../Models/user';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitDisabled: false
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {

    }


    onLoadSuccess(response) {
        this.setState({
            username: response.username,
            password: response.password,
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
            this.state.username,
            this.state.password,
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
                <h1>My Profile</h1>
                <ProfileForm
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

ProfilePage.contextTypes = {
    router: React.PropTypes.object
};