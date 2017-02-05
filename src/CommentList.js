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
                <h4 id="comments_button" onClick={this.handleClick}>sfgdfg</h4>
                <ul>
                    {this.getComments()}
                </ul>
            </div>
        )
    }

    getComments() {
        if (!this.state.isOpen) return null;
        const result = this.props.comments.map((comment) => <li key={comment.id}>
                <Comment text={comment.text}/>
            </li>
        );

        return result
    };

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen

        });
        if(this.state.isOpen){
            var button = document.getElementById('comments_button');
            button.innerHTML =  'Hide Comments'
        }else{
            var button = document.getElementById('comments_button');
            button.innerHTML =  'Show Comments'
        }
    };




}
