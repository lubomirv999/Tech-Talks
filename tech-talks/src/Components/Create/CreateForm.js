import React, {Component} from 'react';
import './CreateStyles.css';

export default class CreateForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label id="title">Title</label>
                    <input id="createTitle"
                        className="form-control"
                        type="text"
                        name="title"
                        value={this.props.title}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label id="contentCreate">Content</label>
                    <textarea id="contentCreateText"
                        className="form-control"
                        name="articleContent"
                        value={this.props.articleContent}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input id="createBtn" className="btn btn-default" type="submit" value="Create" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}