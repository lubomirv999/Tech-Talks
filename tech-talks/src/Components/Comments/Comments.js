import React, { Component } from 'react';
import './CommentsStyles.css'

export default class Comment extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label id="comment">Comment:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="text"
                        value={this.props.text}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input id="button" className="btn btn-default" type="submit" value="Comment"/>
            </form>
        )
    }
}