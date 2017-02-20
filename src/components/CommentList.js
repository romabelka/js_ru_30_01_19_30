import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    state = {
        isOpen: false
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {comments = [], id} = this.props.article
        if (!comments.length) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={id}/>
        </div>)

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)
        return <div>
            <ul>{commentItems}</ul>
            <NewCommentForm articleId={id} />
        </div>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList