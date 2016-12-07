import React, {Component} from 'react';
import {logout} from '../../Models/user';
import observer from '../../Models/observer';

export default class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.logout();
    }

    logout() {
        logout(this.onSubmitResponse.bind(this));
    }

    onSubmitResponse(response) {
        if (response === true) {
            observer.showSuccess('Logout successful!');
            this.context.router.push('/');
        } else {
            observer.showError('Logout unsuccessful!');
        }
    }

    render() {
        return (
            <div>
                <span>Logout Page</span>
            </div>
        );
    }
}

LogoutPage.contextTypes = {
    router: React.PropTypes.object
};