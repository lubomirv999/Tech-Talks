import React, {Component} from 'react';
import {Link} from 'react-router';

export default class TeamControls extends Component {
    render() {
        let edit = null;
        let join = null;
        let leave = null;

        if (this.props.canEdit) edit = <Link to={"/edit/" + this.props.articleId} className="btn btn-default">Edit info</Link>;

        return (
            <div>
                {edit}
                {join}
                {leave}
            </div>
        )
    }
}