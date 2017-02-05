import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        isOpen: false
    };

    render() {
        const {comments} = this.props;
        if (!comments) return null;

        return (
            <div>
                <h4 onClick={this.handleClick}>
                    {this.state.isOpen ? 'Hide Comments' : 'Show Comments'}
                </h4>

                <ul>
                    {this.getComments()}
                </ul>
            </div>
        )
    }

    getComments() {
        if (!this.state.isOpen) return null;
        const result = this.props.comments.map((comment) =>
                <li key={comment.id}>
                    <Comment text={comment.text}/>
                </li>
        );
        return result
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
}
